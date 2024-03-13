import { useRecoilState } from "recoil";
import { levelState } from "../atom";

const useLevel = () => {
  const [level, setLevel] = useRecoilState(levelState);

  return { level, setLevel };
};

export { useLevel };
