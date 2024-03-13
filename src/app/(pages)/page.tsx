"use client";

import Entity from "../(components)/Entity";
import ManagementBoard from "../(components)/ManagementBoard";
import DistributionMap from "../(components)/DistributionMap";
import EstimatedCosts from "../(components)/EstimatedCosts";
import EstimatedPerformance from "../(components)/EstimatedPerformance";
import TotalResult from "../(components)/TotalResult";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

export default function Home() {
  const [data, setData] = useState();

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
    <RecoilRoot>
      <main className="flex flex-col sm:flex-row px-4 py-5 w-full gap-2">
        <div className="basis-[20%]">
          <Entity />
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="basis-auto">
            <ManagementBoard />
          </div>
          <div className="flex-col lg:flex-row gap-2 flex">
            <div className="lg:basis-[70%] flex flex-col gap-2 ">
              <div className="basis-auto">
                <DistributionMap />
              </div>
              <div className="">
                <TotalResult />
              </div>
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
        </div>
      </main>
    </RecoilRoot>
  );
}
