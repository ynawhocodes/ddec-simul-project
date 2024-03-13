import { useRecoilState } from "recoil";
import { levelState } from "../selector";

const useLevel = () => {
  const [level, setLevel] = useRecoilState(levelState);

  return { level, setLevel };
};

export { useLevel };
