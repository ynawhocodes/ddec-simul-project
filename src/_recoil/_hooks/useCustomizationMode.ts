import { useRecoilState } from "recoil";
import { isCustomizationModeState } from "../atom";

const useCustomizationMode = () => {
  const [isCustomizationMode, setIsCustomizationMode] = useRecoilState(
    isCustomizationModeState
  );

  return { isCustomizationMode, setIsCustomizationMode };
};

export { useCustomizationMode };
