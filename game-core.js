export const LOCATIONS = [
  {
    id: 'breakwater',
    name: '별빛 방파제',
    subtitle: '잔잔한 초보 수역',
    depth: 8,
    unlockLevel: 1,
    energy: 8,
    accent: '#62d7c8',
  },
  {
    id: 'reef',
    name: '푸른 산호초',
    subtitle: '물살이 빠른 암초',
    depth: 12,
    unlockLevel: 3,
    energy: 12,
    accent: '#76b7ff',
  },
  {
    id: 'trench',
    name: '검은 해구',
    subtitle: '희귀 생물이 사는 곳',
    depth: 18,
    unlockLevel: 6,
    energy: 17,
    accent: '#ba88ff',
  },
];

export const BAITS = [
  { id: 'squid', name: '오징어 조각', note: '물고기 선호', icon: 'diamond' },
  { id: 'shrimp', name: '새우 미끼', note: '갑각류 선호', icon: 'crab' },
  { id: 'shell', name: '조개살', note: '바닥 생물 선호', icon: 'shell' },
];

export const SPECIES = [
  { id: 'mackerel', name: '전갱이', shape: 'fish', color: '#92c9da', rarity: 'common', baseValue: 820, depth: [2, 10], baits: ['squid'], size: [18, 35], weight: [0.12, 0.48], description: '떼를 지어 움직이는 은빛 물고기.' },
  { id: 'rockfish', name: '우럭', shape: 'fish', color: '#8297a6', rarity: 'common', baseValue: 1180, depth: [5, 15], baits: ['squid', 'shrimp'], size: [22, 44], weight: [0.28, 1.5], description: '바위틈에 숨어 통발을 살핀다.' },
  { id: 'filefish', name: '쥐치', shape: 'fish', color: '#d4c07b', rarity: 'common', baseValue: 940, depth: [4, 13], baits: ['shell'], size: [16, 31], weight: [0.13, 0.55], description: '납작한 몸으로 암초 사이를 누빈다.' },
  { id: 'crab', name: '꽃게', shape: 'crab', color: '#e98267', rarity: 'common', baseValue: 1460, depth: [3, 12], baits: ['shrimp', 'shell'], size: [9, 19], weight: [0.18, 0.72], description: '미끼 냄새를 놓치지 않는 성급한 손님.' },
  { id: 'conch', name: '소라', shape: 'shell', color: '#e1ba84', rarity: 'common', baseValue: 760, depth: [4, 18], baits: ['shell'], size: [7, 16], weight: [0.11, 0.51], description: '바닥을 천천히 기어 다니는 단단한 생물.' },
  { id: 'starfish', name: '불가사리', shape: 'star', color: '#ec9c84', rarity: 'common', baseValue: 430, depth: [2, 18], baits: ['shell'], size: [8, 24], weight: [0.05, 0.32], description: '수집가는 좋아하지만 시장 가격은 낮다.' },
  { id: 'flounder', name: '도다리', shape: 'flatfish', color: '#bda676', rarity: 'uncommon', baseValue: 2120, depth: [6, 16], baits: ['shrimp'], size: [23, 47], weight: [0.35, 1.9], description: '모래바닥과 닮은 무늬로 몸을 숨긴다.' },
  { id: 'octopus', name: '참문어', shape: 'octopus', color: '#d77aa8', rarity: 'uncommon', baseValue: 2880, depth: [5, 18], baits: ['crab', 'shrimp'], size: [28, 68], weight: [0.6, 3.4], description: '통발 문을 열어보려는 영리한 사냥꾼.' },
  { id: 'squid', name: '갑오징어', shape: 'squid', color: '#d9c8e7', rarity: 'uncommon', baseValue: 2460, depth: [4, 15], baits: ['shrimp', 'squid'], size: [19, 41], weight: [0.22, 1.2], description: '빛을 받으면 몸빛이 빠르게 바뀐다.' },
  { id: 'jellyfish', name: '달빛 해파리', shape: 'jelly', color: '#8ab7ff', rarity: 'uncommon', baseValue: 1820, depth: [1, 12], baits: ['squid'], size: [14, 33], weight: [0.08, 0.42], description: '밤바다에서 은은하게 빛나는 해파리.' },
  { id: 'lobster', name: '붉은 바닷가재', shape: 'lobster', color: '#cf604e', rarity: 'rare', baseValue: 6250, depth: [8, 20], baits: ['shrimp'], size: [25, 51], weight: [0.7, 2.8], description: '깊은 암초에서만 모습을 드러내는 귀한 갑각류.' },
  { id: 'angler', name: '초롱아귀', shape: 'angler', color: '#a3c47b', rarity: 'rare', baseValue: 7380, depth: [12, 24], baits: ['squid'], size: [21, 46], weight: [0.48, 2.2], description: '어둠 속 작은 불빛으로 먹이를 유혹한다.' },
  { id: 'seahorse', name: '황금 해마', shape: 'seahorse', color: '#f1c760', rarity: 'rare', baseValue: 8450, depth: [7, 17], baits: ['shell'], size: [8, 17], weight: [0.03, 0.14], description: '해초 숲에 숨어 있는 행운의 상징.' },
  { id: 'nautilus', name: '진주 앵무조개', shape: 'shell', color: '#f2dfb1', rarity: 'epic', baseValue: 16400, depth: [14, 25], baits: ['shell'], size: [12, 27], weight: [0.25, 0.9], description: '오래된 바다의 시간을 품은 나선형 생물.' },
  { id: 'moonray', name: '월광 가오리', shape: 'ray', color: '#aa9be8', rarity: 'epic', baseValue: 21800, depth: [15, 30], baits: ['squid'], size: [42, 96], weight: [2.2, 9.5], description: '달빛이 강한 밤에 수면 가까이 떠오른다.' },
  { id: 'crowncrab', name: '왕관 게', shape: 'crab', color: '#f0b44e', rarity: 'legendary', baseValue: 48600, depth: [17, 30], baits: ['shrimp', 'shell'], size: [18, 31], weight: [0.8, 2.4], description: '수백 번의 조업에서도 보기 힘든 전설의 게.' },
];

export const RARITY_META = {
  common: { label: '보통', multiplier: 1, weight: 64 },
  uncommon: { label: '고급', multiplier: 1.35, weight: 24 },
  rare: { label: '희귀', multiplier: 2.05, weight: 9 },
  epic: { label: '영웅', multiplier: 3.2, weight: 2.6 },
  legendary: { label: '전설', multiplier: 5.4, weight: 0.4 },
};

export const GEAR = {
  trap: {
    id: 'trap',
    name: '접이식 통발',
    description: '한 번에 잡히는 생물 수와 희귀 확률이 증가합니다.',
    baseCost: 5400,
    accent: '#67ddc7',
  },
  rope: {
    id: 'rope',
    name: '염분 코팅 밧줄',
    description: '실수했을 때 줄 장력이 덜 올라갑니다.',
    baseCost: 4300,
    accent: '#e9c56e',
  },
  lamp: {
    id: 'lamp',
    name: '심해 유도등',
    description: '깊은 수역의 희귀 생물을 더 잘 끌어들입니다.',
    baseCost: 6900,
    accent: '#8fb8ff',
  },
};

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function formatWon(value) {
  return `₩${Math.round(value).toLocaleString('ko-KR')}`;
}

export function levelFromXp(xp) {
  return Math.max(1, Math.floor(Math.sqrt(Math.max(0, xp) / 85)) + 1);
}

export function xpForNextLevel(level) {
  return Math.pow(level, 2) * 85;
}

export function calculatePullRating(cursor, targetCenter, targetWidth) {
  const distance = Math.abs(cursor - targetCenter);
  if (distance <= targetWidth * 0.18) return 'perfect';
  if (distance <= targetWidth * 0.52) return 'good';
  return 'miss';
}

export function getUpgradeCost(gearId, currentLevel) {
  const gear = GEAR[gearId];
  if (!gear) throw new Error(`Unknown gear: ${gearId}`);
  return Math.round(gear.baseCost * Math.pow(1.72, Math.max(0, currentLevel - 1)) / 100) * 100;
}

function weightedPick(items, weightOf, rng) {
  const total = items.reduce((sum, item) => sum + Math.max(0, weightOf(item)), 0);
  if (total <= 0) return items[0];
  let needle = rng() * total;
  for (const item of items) {
    needle -= Math.max(0, weightOf(item));
    if (needle <= 0) return item;
  }
  return items[items.length - 1];
}

function randomBetween(min, max, rng) {
  return min + (max - min) * rng();
}

export function generateCatch({
  depth,
  baitId,
  performance = 0.5,
  trapLevel = 1,
  lampLevel = 1,
  locationId = 'breakwater',
  rng = Math.random,
}) {
  const eligible = SPECIES.filter((species) => depth >= species.depth[0] - 2 && depth <= species.depth[1] + 2);
  const pool = eligible.length ? eligible : SPECIES.slice(0, 6);
  const countChance = clamp(performance * 0.75 + (trapLevel - 1) * 0.11, 0, 0.92);
  const count = 1 + (rng() < countChance ? 1 : 0) + (trapLevel >= 3 && rng() < countChance * 0.42 ? 1 : 0);
  const result = [];

  for (let index = 0; index < count; index += 1) {
    const species = weightedPick(
      pool,
      (candidate) => {
        const rarity = RARITY_META[candidate.rarity];
        const baitBoost = candidate.baits.includes(baitId) ? 2.15 : 0.72;
        const depthCenter = (candidate.depth[0] + candidate.depth[1]) / 2;
        const depthFit = 1 / (1 + Math.abs(depth - depthCenter) * 0.11);
        const performanceBoost = 1 + performance * (candidate.rarity === 'common' ? 0.15 : 1.4);
        const lampBoost = candidate.rarity === 'rare' || candidate.rarity === 'epic' || candidate.rarity === 'legendary'
          ? 1 + (lampLevel - 1) * 0.28
          : 1;
        const locationBoost = locationId === 'trench' && candidate.rarity !== 'common' ? 1.45 : 1;
        return rarity.weight * baitBoost * depthFit * performanceBoost * lampBoost * locationBoost;
      },
      rng,
    );

    const sizeQuality = clamp(0.32 + performance * 0.5 + rng() * 0.3, 0.08, 1);
    const length = randomBetween(species.size[0], species.size[1], () => sizeQuality);
    const weight = randomBetween(species.weight[0], species.weight[1], () => clamp(sizeQuality * (0.75 + rng() * 0.35), 0, 1));
    const rarityMultiplier = RARITY_META[species.rarity].multiplier;
    const value = Math.round(species.baseValue * rarityMultiplier * (0.72 + sizeQuality * 0.62) / 10) * 10;

    result.push({
      uid: `${Date.now().toString(36)}-${index}-${Math.floor(rng() * 1e8).toString(36)}`,
      speciesId: species.id,
      name: species.name,
      rarity: species.rarity,
      length: Number(length.toFixed(1)),
      weight: Number(weight.toFixed(2)),
      value,
      caughtAt: new Date().toISOString(),
    });
  }

  return result;
}

export function getDailyQuest(day = 1) {
  const quests = [
    { speciesId: 'mackerel', target: 2, reward: 3600, title: '은빛 떼를 찾아서' },
    { speciesId: 'crab', target: 2, reward: 4800, title: '시장 인기 품목' },
    { speciesId: 'rockfish', target: 2, reward: 5300, title: '저녁 식탁 준비' },
    { speciesId: 'filefish', target: 3, reward: 6100, title: '말린 생선 재료' },
    { speciesId: 'octopus', target: 1, reward: 7900, title: '식당의 긴급 주문' },
  ];
  return { ...quests[(Math.max(1, day) - 1) % quests.length] };
}

export function defaultState() {
  return {
    version: 1,
    day: 1,
    minutes: 19 * 60 + 30,
    money: 29293,
    energy: 100,
    xp: 0,
    weatherIndex: 0,
    selectedLocation: 'breakwater',
    selectedBait: 'squid',
    bait: { squid: 8, shrimp: 6, shell: 5 },
    gear: { trap: 1, rope: 1, lamp: 1 },
    inventory: [],
    codex: {},
    records: {},
    quest: { day: 1, progress: 0, claimed: false },
    settings: { sound: true, haptics: true },
  };
}
