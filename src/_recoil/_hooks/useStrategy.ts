import { useRecoilState, useRecoilValue } from "recoil";
import { allOfStrategyData } from "@/_assets/data/strategy";
import { levelState, strategyState } from "../selector";
import { StrategyType } from "@/_types/data";

const useStategy = () => {
  const [strategy, setStrategy] = useRecoilState(strategyState);
  const currentLevel = useRecoilValue(levelState);

  const setStorageType = (localId: number, storageType: string) => {
    const newArr: StrategyType[] = strategy.map((el) => {
      if (el.local_id === localId) {
        return { ...el, storage_type: storageType };
      } else {
        return { ...el };
      }
    });

    setStrategy(newArr);
  };

  const setStrategyByLevel = () => {
    setStrategy(allOfStrategyData[currentLevel]);
  };

  const getStorageType = (localId: number) => {
    // setStrategyByLevel();
    return strategy.find((el) => el.local_id === localId)?.storage_type || "";
  };

  return {
    strategy,
    setStrategy,
    setStrategyByLevel,
    getStorageType,
    setStorageType,
  };
};

export { useStategy };
