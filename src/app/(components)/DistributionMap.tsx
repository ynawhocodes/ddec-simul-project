import {
  EightBlock,
  ElevenBlock,
  FiveBlock,
  FourBlock,
  NineBlock,
  OneBlock,
  SevenBlock,
  SixBlock,
  TenBlock,
  ThreeBlock,
  TwelveBlock,
  TwoBlock,
} from "@/_assets/icons";
import SectionWrapper from "./common/SectionWrapper";
import CaptionProvider from "./common/Caption";
import { getStorageType } from "@/_utils/getStorageType";

const DistributionMap = ({
  level,
  handleStorageTypeByLocalId,
}: {
  level: number;
  handleStorageTypeByLocalId: (localId: number, storageType: string) => void;
}) => {
  return (
    <SectionWrapper title="Distribution Map">
      <div className="bg-gray-200 w-full relative">
        <img className="" src="/map_img.jpg" alt="map" />

        <div className="absolute top-[17%] left-[15%] w-[16%]">
          <CaptionProvider
            level={level}
            localId={1}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <OneBlock storageType={getStorageType(level, 1)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[17%] left-[32%] w-[15%]">
          <CaptionProvider
            level={level}
            localId={2}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <TwoBlock storageType={getStorageType(level, 2)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[35%] left-[14.5%] w-[10%]">
          <CaptionProvider
            level={level}
            localId={3}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <ThreeBlock storageType={getStorageType(level, 3)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[35%] left-[25.5%] w-[13%]">
          <CaptionProvider
            level={level}
            localId={4}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <FourBlock storageType={getStorageType(level, 4)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[33%] left-[39%] w-[23%]">
          <CaptionProvider
            level={level}
            localId={5}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <FiveBlock storageType={getStorageType(level, 5)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[17%] left-[48%] w-[14%]">
          <CaptionProvider
            level={level}
            localId={6}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <SixBlock storageType={getStorageType(level, 6)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[17%] left-[63%] w-[15%]">
          <CaptionProvider
            level={level}
            localId={7}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <SevenBlock storageType={getStorageType(level, 7)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[34%] left-[63%] w-[14%]">
          <CaptionProvider
            level={level}
            localId={8}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <EightBlock storageType={getStorageType(level, 8)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[56%] left-[15%] w-[16%]">
          <CaptionProvider
            level={level}
            localId={9}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <NineBlock storageType={getStorageType(level, 9)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[56%] left-[32%] w-[15%]">
          <CaptionProvider
            level={level}
            localId={10}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <TenBlock storageType={getStorageType(level, 10)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[62%] left-[48%] w-[14%]">
          <CaptionProvider
            level={level}
            localId={11}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <ElevenBlock storageType={getStorageType(level, 11)} />
          </CaptionProvider>
        </div>
        <div className="absolute top-[61%] left-[63%] w-[15%]">
          <CaptionProvider
            level={level}
            localId={12}
            handleStorageTypeByLocalId={handleStorageTypeByLocalId}
          >
            <TwelveBlock storageType={getStorageType(level, 12)} />
          </CaptionProvider>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DistributionMap;
