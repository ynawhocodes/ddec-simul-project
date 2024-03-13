"use client";

import Entity from "../(components)/Entity";
import ManagementBoard from "../(components)/ManagementBoard";
import DistributionMap from "../(components)/DistributionMap";
import EstimatedCosts from "../(components)/EstimatedCosts";
import EstimatedPerformance from "../(components)/EstimatedPerformance";
import TotalResult from "../(components)/TotalResult";
import { useEffect, useState } from "react";
import { ResultType } from "@/_types/data";
import { defaultResultValue } from "@/_assets/data/defaultResultValue";
import { useStrategy } from "@/_recoil/_hooks/useStrategy";
import Loading from "../(components)/common/Loading";

export default function Home() {
  const [data, setData] = useState<ResultType>(defaultResultValue);
  const [isLoading, setIsLoading] = useState(false);
  const { strategy } = useStrategy();

  const postStrategyData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/postStrategy", {
        method: "POST",
        body: JSON.stringify({
          strategy: strategy,
        }),
      });
      const result = await response.json();
      setData(result.data);
      setIsLoading(false);

      return data;
    } catch (error) {
      throw new Error("[싪패]");
    }
  };

  return (
    <main className="flex flex-col sm:flex-row px-4 py-5 w-full gap-2">
      {isLoading && <Loading />}
      <div className="basis-[20%]">
        <Entity />
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="basis-auto">
          <ManagementBoard handleSubmit={postStrategyData} />
        </div>
        <div className="flex-col lg:flex-row gap-2 flex">
          <div className="lg:basis-[70%] flex flex-col gap-2 ">
            <div className="basis-auto">
              <DistributionMap />
            </div>
            <div className="">
              <TotalResult data={data} />
            </div>
          </div>
          <div className="flex lg:flex-col gap-2 lg:basis-[30%]">
            <div className="basis-auto">
              <EstimatedCosts data={data} />
            </div>
            <div className="basis-2/3">
              <EstimatedPerformance data={data} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
