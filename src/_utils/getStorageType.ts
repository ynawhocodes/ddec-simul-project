import { strategyData } from "@/_assets/data/strategy";

const getStorageType = (level: number, localId: number) => {
  return strategyData[level]?.includes(localId) ? "EDGE" : "CLOUD";
};

export { getStorageType };
