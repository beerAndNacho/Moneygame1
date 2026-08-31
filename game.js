import {
  BAITS,
  GEAR,
  LOCATIONS,
  RARITY_META,
  SPECIES,
  calculatePullRating,
  clamp,
  defaultState,
  formatWon,
  generateCatch,
  getDailyQuest,
  getUpgradeCost,
  levelFromXp,
} from './game-core.js';

const partUrls = [new URL('./game-part-1.txt', import.meta.url), new URL('./game-part-2.txt', import.meta.url), new URL('./game-part-3.txt', import.meta.url), new URL('./game-part-4.txt', import.meta.url), new URL('./game-part-5.txt', import.meta.url), new URL('./game-part-6.txt', import.meta.url), new URL('./game-part-7.txt', import.meta.url)];

const sourceParts = await Promise.all(partUrls.map(async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`게임 모듈을 불러오지 못했습니다: ${url.pathname}`);
  return response.text();
}));

const runGame = new Function('BAITS', 'GEAR', 'LOCATIONS', 'RARITY_META', 'SPECIES', 'calculatePullRating', 'clamp', 'defaultState', 'formatWon', 'generateCatch', 'getDailyQuest', 'getUpgradeCost', 'levelFromXp', `${sourceParts.join('\n')}\n//# sourceURL=moneygame-runtime.js`);
runGame(BAITS, GEAR, LOCATIONS, RARITY_META, SPECIES, calculatePullRating, clamp, defaultState, formatWon, generateCatch, getDailyQuest, getUpgradeCost, levelFromXp);
