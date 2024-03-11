"use client";

import Entity from "../(components)/Entity";
import ManagementBoard from "../(components)/ManagementBoard";
import DistributionMap from "../(components)/DistributionMap";
import EstimatedCosts from "../(components)/EstimatedCosts";
import EstimatedPerformance from "../(components)/EstimatedPerformance";
import TotalResult from "../(components)/TotalResult";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const [level, setLevel] = useState(0);
  const [isCustomizationMode, setIsCustomizationMode] = useState(true);

  const handleLevel = (l: number) => {
    setLevel(l);
  };

  const handleStorageTypeByLocalId = (
    localId: number,
    storageType: string
  ) => {};

  const handleCustomizationMode = (state: boolean) => {
    setIsCustomizationMode(state);
  };
  // const test = async () => {
  //   try {
  //     const response = await fetch("/api/test");
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     throw new Error("[싪패]");
  //   }
  // };

  // useEffect(() => {
  //   (async () => {
  //     const result = await test();
  //     setData(result.data.result);
  //     console.log(">>>>>", result.data.result);
  //   })();
  // }, []);

  return (
    <main className="flex flex-col sm:flex-row px-4 py-5 w-full gap-2 mb-5">
      <div className="basis-[20%]">
        <Entity />
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="basis-auto">
          <ManagementBoard
            level={level}
            isCustomizationMode={isCustomizationMode}
            handleLevel={handleLevel}
            handleCustomizationMode={handleCustomizationMode}
          />
        </div>
        <div className="flex-col lg:flex-row gap-2 flex">
          <div className="lg:basis-[70%]">
            <DistributionMap
              level={level}
              isCustomizationMode={isCustomizationMode}
              handleStorageTypeByLocalId={handleStorageTypeByLocalId}
            />
          </div>
          <div className="flex lg:flex-col gap-2 lg:basis-[30%]">
            <div className="basis-auto">
              <EstimatedCosts />
            </div>
            <div className="basis-2/3">
              <EstimatedPerformance />
            </div>
          </div>
        </div>
        <div className="basis-auto">
          <TotalResult />
        </div>
      </div>
    </main>
  );
}
