import SectionWrapper from "./common/SectionWrapper";
import { useCustomizationMode } from "@/_recoil/_hooks/useCustomizationMode";
import { useStrategy } from "@/_recoil/_hooks/useStrategy";
import { useState } from "react";
import { motion } from "framer-motion";

const ManagementBoard = ({ handleSubmit }: { handleSubmit: () => void }) => {
  const { isCustomizationMode, setIsCustomizationMode } =
    useCustomizationMode();
  const { setStrategyByLevel } = useStrategy();
  const [level, setLevel] = useState(0);

  return (
    <SectionWrapper title="Management Board">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <p className="text-[14px]">Cost-Performance Effective Optimization</p>
          <input
            className="relative mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#5D63F1] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-[#e6e6e6] dark:after:bg-neutral-100 dark:checked:bg-[#5D63F1] dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault02"
            disabled
          />
        </div>
        <div className="flex gap-2">
          <p className="text-[14px]">Customization mode</p>
          <input
            className="relative mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#5D63F1] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-[#e6e6e6] dark:after:bg-neutral-100 dark:checked:bg-[#5D63F1] dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault02"
            defaultChecked
            onChange={() => setIsCustomizationMode(!isCustomizationMode)}
          />
        </div>

        <div className="flex flex-col lg:items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col flex-1">
            <p className="text-[14px]">Distribution level</p>
            <div>
              <input
                className="accent-[#5D63F1] [&::-webkit-slider-thumb]:bg-white w-full"
                type="range"
                min="0"
                max="5"
                defaultValue={0}
                onChange={(e) => {
                  setStrategyByLevel(Number(e.target.value));
                  setLevel(Number(e.target.value));
                }}
              />
            </div>
            <div className="flex justify-between">
              {["Cloud", "Lv 1", "Lv 2", "Lv 3", "Lv 4", "Edge"].map(
                (el, i) => (
                  <p
                    className="text-[12px]"
                    style={
                      i === level ? { color: "#6B7280" } : { color: "#c5c5c5" }
                    }
                    key={i}
                  >
                    {el}
                  </p>
                )
              )}
            </div>
          </div>
          <motion.button
            className="bg-[#5D63F1] hover:bg-[#5D63F1]/50 text-white py-2 md:h-10 md:w-20 rounded-md"
            onClick={handleSubmit}
            whileTap={{ scale: 0.85 }}
          >
            submit
          </motion.button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ManagementBoard;
