import { atom } from "recoil";

const strategyState = atom({
  key: "strategyState",
  default: [
    { local_id: 1, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 2, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 3, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 4, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 5, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 6, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 7, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 8, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 9, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 10, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 11, storage_type: "CLOUD", storage_id: 0 },
    { local_id: 12, storage_type: "CLOUD", storage_id: 0 },
  ],
});

const levelState = atom({
  key: "levelState",
  default: 0,
});

const isCustomizationModeState = atom({
  key: "isCustomizationModeState",
  default: true,
});

export { strategyState, levelState, isCustomizationModeState };
