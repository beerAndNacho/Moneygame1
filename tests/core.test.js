import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BAITS, LOCATIONS, SPECIES, TRAPS, GameStore, calculatePullOutcome,
  createInitialState, generateCatchBatch, getDailyQuestIds, getFreshness,
  getMarketSnapshot, getSaleQuote, getSlotCount, getTrapStatus, judgePlacement,
  judgeTiming, migrateState, mulberry32, salvageCatchBatch,
} from '../.generated/game-core.js';

class MemoryStorage {
  constructor() { this.map = new Map(); }
  getItem(key) { return this.map.has(key) ? this.map.get(key) : null; }
  setItem(key, value) { this.map.set(key, String(value)); }
  removeItem(key) { this.map.delete(key); }
}

test('2차 콘텐츠 목표 수량을 만족한다', () => {
  assert.equal(LOCATIONS.length, 5);
  assert.equal(SPECIES.length, 36);
  assert.equal(TRAPS.length, 5);
  assert.equal(BAITS.length, 8);
});

test('설치 판정은 중앙에서 perfect, 외곽에서 unstable이다', () => {
  assert.equal(judgeTiming(.5, .5, .18), 'perfect');
  assert.equal(judgePlacement(.5, .5, .18), 'perfect');
  assert.equal(judgePlacement(.98, .5, .18), 'unstable');
});

test('통발 상태는 대기 시간에 따라 진행된다', () => {
  const trap = { deployedAt:1_000, readyAt:11_000, status:'active' };
  assert.equal(getTrapStatus(trap, 1_200), 'sinking');
  assert.equal(getTrapStatus(trap, 6_000), 'fishing');
  assert.equal(getTrapStatus(trap, 12_000), 'ready');
  assert.equal(getTrapStatus(trap, 27_000), 'stale');
});

test('시장 시세와 어획 결과는 동일 seed에서 결정적이다', () => {
  assert.deepEqual(getMarketSnapshot(4), getMarketSnapshot(4));
  const args = {
    locationItem:LOCATIONS[0], trap:TRAPS[0], bait:BAITS[0], seed:991,
    satisfaction:1.18, score:4200, placementQuality:'perfect', weatherRarityModifier:1,
    overdueRatio:0, now:100000,
  };
  assert.deepEqual(generateCatchBatch(args), generateCatchBatch(args));
});

test('다중 어획은 용량을 넘지 않고 한 종류 이상 생성한다', () => {
  const items = generateCatchBatch({ locationItem:LOCATIONS[3], trap:TRAPS[3], bait:BAITS[6], seed:88, satisfaction:1.3, score:8000, placementQuality:'perfect', weatherRarityModifier:1.1, now:100000 });
  const units = items.reduce((sum, item) => sum + item.quantity, 0);
  assert.ok(items.length >= 1 && items.length <= 4);
  assert.ok(units >= 1 && units <= TRAPS[3].capacity);
});

test('부분 성공은 최소 한 마리를 보존한다', () => {
  const items = generateCatchBatch({ locationItem:LOCATIONS[0], trap:TRAPS[0], bait:BAITS[0], seed:44, now:100000 });
  const result = salvageCatchBatch(items, .25, mulberry32(2));
  assert.ok(result.kept.reduce((sum, item) => sum + item.quantity, 0) >= 1);
  assert.ok(result.lostCount >= 0);
});

test('냉장고 레벨이 높을수록 신선도가 오래 유지된다', () => {
  const item = { caughtAt:new Date(0).toISOString() };
  const after10Hours = 10 * 3600_000;
  assert.ok(getFreshness(item, 3, after10Hours) > getFreshness(item, 0, after10Hours));
});

test('도시 가격은 일일 시세를 반영한다', () => {
  const species = SPECIES[0];
  const item = { speciesId:species.id, baseValue:1000, caughtAt:new Date().toISOString() };
  const village = getSaleQuote(item, { day:2, coolerLevel:0, channel:'village' });
  const city = getSaleQuote(item, { day:2, coolerLevel:0, channel:'city' });
  assert.ok(village.amount > 0);
  assert.ok(city.marketMultiplier > 0);
});

test('일일 의뢰는 매일 3개이며 날짜별로 변경된다', () => {
  assert.equal(getDailyQuestIds(1).length, 3);
  assert.equal(new Set(getDailyQuestIds(1)).size, 3);
  assert.notDeepEqual(getDailyQuestIds(1), getDailyQuestIds(2));
});

test('v1 세이브를 v2 구조로 마이그레이션한다', () => {
  const migrated = migrateState({ profile:{ level:4, voyages:7 }, inventory:[] });
  assert.equal(migrated.version, 2);
  assert.equal(migrated.profile.level, 4);
  assert.equal(migrated.profile.deployments, 7);
  assert.equal(migrated.activeTraps.length, 0);
  assert.equal(migrated.dailyQuestIds.length, 3);
});

test('GameStore에서 설치, 시간 경과, 회수, 판매가 연결된다', () => {
  const storage = new MemoryStorage();
  const store = new GameStore(storage);
  const deployment = store.deployTrap({ placementQuality:'perfect', now:10_000, seed:123 });
  assert.equal(deployment.ok, true);
  assert.equal(deployment.duration, 15_000);
  assert.equal(store.state.activeTraps.length, 1);
  assert.equal(store.canRetrieve(deployment.active.id, 25_001).ok, true);

  const items = generateCatchBatch({ locationItem:LOCATIONS[0], trap:TRAPS[0], bait:BAITS[0], seed:123, satisfaction:1.1, score:2500, placementQuality:'perfect', now:25_001 });
  const retrieval = store.completeRetrieval(deployment.active.id, items, { bestCombo:3, perfects:4, durability:45 });
  assert.equal(retrieval.ok, true);
  assert.equal(store.state.activeTraps.length, 0);
  assert.ok(store.state.inventory.length > 0);
  assert.ok(Object.keys(store.state.collection).length > 0);

  const before = store.state.profile.coins;
  const sold = store.sellCatch(store.state.inventory[0].id, 'village', 25_002);
  assert.equal(sold.ok, true);
  assert.ok(store.state.profile.coins > before);
});

test('거치대 레벨은 동시 슬롯 1~3개로 제한된다', () => {
  assert.equal(getSlotCount(0), 1);
  assert.equal(getSlotCount(1), 1);
  assert.equal(getSlotCount(2), 2);
  assert.equal(getSlotCount(3), 3);
  assert.equal(getSlotCount(99), 3);
});

test('PERFECT 판정은 MISS보다 깊이 이득이 크고 장력 증가가 작다', () => {
  const perfect = calculatePullOutcome({ judgement:'perfect', random:() => .5 });
  const miss = calculatePullOutcome({ judgement:'miss', random:() => .5 });
  assert.ok(perfect.depthGain > miss.depthGain);
  assert.ok(perfect.tensionGain < miss.tensionGain);
});

test('초기 세이브는 유효한 선택과 장비 구조를 갖는다', () => {
  const state = createInitialState();
  assert.equal(state.version, 2);
  assert.equal(state.boat.rack, 1);
  assert.equal(state.dailyQuestIds.length, 3);
  assert.ok(state.traps[state.selection.trapId].owned);
  assert.ok(state.baits[state.selection.baitId] > 0);
});
