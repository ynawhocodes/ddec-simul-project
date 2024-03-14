"use client";

import usePostStrategy from "@/_api/usePostStrategy";
import { useStrategy } from "@/_recoil/_hooks/useStrategy";
import Entity from "@/app/(components)/Entity";
import TotalResult from "@/app/(components)/TotalResult";
import LevelOption from "@/app/(components)/baseline/LevelOption";
import Loading from "@/app/(components)/common/Loading";
import { useState } from "react";
import { motion } from "framer-motion";

const BaselinePage = () => {
  const [id, setId] = useState(0);
  const { setStrategyByLevel } = useStrategy();

  const { isLoading, postStrategyData, data } = usePostStrategy();

  return (
    <main className="flex flex-col sm:flex-row px-4 py-5 w-full gap-2">
      {isLoading && <Loading />}
      <div className="basis-[20%]">
        <Entity menu="baseline" />
      </div>
      <div className="flex flex-col gap-2 basis-[80%]">
        <div className="flex justify-end w-full py-4">
          <motion.button
            className="bg-[#5D63F1] hover:bg-[#5D63F1]/50 text-white py-2 h-10 w-20 rounded-md"
            onClick={postStrategyData}
            whileTap={{ scale: 0.85 }}
          >
            submit
          </motion.button>
        </div>
        <div className="flex flex-1 overflow-x-auto gap-2 sm:w-[80vw]">
          {CONTENT.map((el, i) => (
            <LevelOption
              key={i}
              index={i}
              en={el.en}
              kr={el.kr}
              checked={i === id}
              onChange={() => {
                setId(i);
                setStrategyByLevel(i);
              }}
            />
          ))}
        </div>
        <div className="basis-auto">
          <TotalResult data={data} />
        </div>
      </div>
    </main>
  );
};

export default BaselinePage;

const CONTENT = [
  {
    en: "Cloud-Only\nData Distribution",
    kr: "모든 지역의 데이터를 위한범용 클라우드 스토리지 사용\n\n높은 처리량 성능\n99.99%의 가용성을 제공하도록 설계",
  },
  {
    en: "Cloud Use 90%\nEdge Use 10%\nData Distribution",
    kr: "서비스하는 모든 지역 중 10%의 엣지 스토리지 사용\n\n클라우드 스토리지에 비해 속도 42.9배 향상\n\n99.95%의 가용성을 제공하도록 설계",
  },
  {
    en: "Cloud Use 75%E\ndge Use 25%\nData Distribution",
    kr: "서비스하는 모든 지역 중 25%의 엣지 스토리지 사용\n\n클라우드 스토리지에 비해 속도 77.8배 향상\n\n99.95%의 가용성을 제공하도록 설계",
  },
  {
    en: "Cloud Use 60%\nEdge Use 40%\nData Distribution",
    kr: "서비스하는 모든 지역 중 40%의 엣지 스토리지 사용\n\n클라우드 스토리지에 비해 속도 87.2배 향상\n\n99.95%의 가용성을 제공하도록 설계",
  },
  {
    en: "Cloud Use 25%\nEdge Use 75%D\nata Distribution",
    kr: "서비스하는 모든 지역 중 75%의 엣지 스토리지 사용\n\n클라우드 스토리지에 비해 속도를 98.7배 향상\n\n99.95%의 가용성을 제공하도록 설계",
  },
  {
    en: "Full Use of Edge\nData Distribution",
    kr: "서비스하는 모든 지역의 엣지 스토리지 사용\n\n클라우드 스토리지에 비해 속도를 99배 향상\n\n99.95%의 가용성을 제공하도록 설계",
  },
];
