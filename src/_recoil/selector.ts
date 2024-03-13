import { DefaultValue, selector } from "recoil";
import { IS_CUSTOMIZATION_MODE, LEVEL, STRATEGY } from "./atom";

const strategyState = selector({
  key: "strategyStateByLabel_selector",
  get: ({ get }) => {
    const data = get(STRATEGY);
    return data;
  },
  set: ({ set }, newValue) =>
    set(STRATEGY, newValue instanceof DefaultValue ? [] : newValue),
});

const levelState = selector({
  key: "level_selector",
  get: ({ get }) => {
    const data = get(LEVEL);
    return data;
  },
  set: ({ set }, newValue) =>
    set(LEVEL, newValue instanceof DefaultValue ? 0 : newValue),
});

const isCustomizationModeState = selector({
  key: "isCustomizationMode_selector",
  get: ({ get }) => {
    const data = get(IS_CUSTOMIZATION_MODE);
    return data;
  },
  set: ({ set }, newValue) =>
    set(
      IS_CUSTOMIZATION_MODE,
      newValue instanceof DefaultValue ? true : newValue
    ),
});

export { strategyState, levelState, isCustomizationModeState };
