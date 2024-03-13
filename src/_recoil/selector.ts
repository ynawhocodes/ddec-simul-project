import { selector } from "recoil";
import { levelState, strategyState } from "./atom";

const getStrategyStateByLevel = selector({
  key: "strategyStateByLabel",
  get: ({ get }) => {
    const data = get(strategyState);
  },
});

const getLevel = selector({
  key: "level",
  get: ({ get }) => {
    const data = get(levelState);
  },
});

export { getStrategyStateByLevel, getLevel };
