import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePullRating,
  defaultState,
  generateCatch,
  getDailyQuest,
  getUpgradeCost,
  levelFromXp,
} from '../game-core.js';

test('pull rating distinguishes perfect, good and miss', () => {
  assert.equal(calculatePullRating(0.5, 0.5, 0.2), 'perfect');
  assert.equal(calculatePullRating(0.58, 0.5, 0.2), 'good');
  assert.equal(calculatePullRating(0.9, 0.5, 0.2), 'miss');
});

test('upgrade costs rise with level', () => {
  assert.ok(getUpgradeCost('trap', 2) > getUpgradeCost('trap', 1));
  assert.ok(getUpgradeCost('lamp', 3) > getUpgradeCost('lamp', 2));
});

test('catch generator returns valid deterministic catch', () => {
  const values = [0.15, 0.4, 0.6, 0.3, 0.8, 0.2, 0.9, 0.5, 0.7];
  let index = 0;
  const rng = () => values[index++ % values.length];
  const catches = generateCatch({
    depth: 8,
    baitId: 'squid',
    performance: 0.8,
    trapLevel: 2,
    lampLevel: 1,
    rng,
  });
  assert.ok(catches.length >= 1);
  assert.ok(catches.every((item) => item.value > 0 && item.length > 0 && item.weight > 0));
});

test('default state and quest are ready to play', () => {
  const state = defaultState();
  assert.equal(state.money, 29293);
  assert.equal(getDailyQuest(1).speciesId, 'mackerel');
  assert.equal(levelFromXp(0), 1);
  assert.ok(levelFromXp(2000) > 1);
});
