import { captionInfo } from "@/_assets/data/caption";
import { useCustomizationMode } from "@/_recoil/_hooks/useCustomizationMode";
import { useLevel } from "@/_recoil/_hooks/useLevel";
import { getStorageType } from "@/_utils/getStorageType";
import { motion } from "framer-motion";
import { useState } from "react";

const Caption = ({
  localId,
  handleStorageTypeByLocalId,
}: {
  localId: number;
  handleStorageTypeByLocalId: (localId: number, storageType: string) => void;
}) => {
  const { level, setLevel } = useLevel();
  const { isCustomizationMode, setIsCustomizationMode } =
    useCustomizationMode();
  const [storageType, setStorageType] = useState(
    getStorageType(level, localId)
  );

  return (
    <div className="p-3 flex flex-col gap-1 absolute left-10 top-10 bg-white/80 rounded-lg shadow-lg flex-nowrap cursor-pointer">
      <div className="flex gap-2 border-b pb-2 border-gray-300 items-center">
        <p className="font-semibold whitespace-nowrap text-[14px]">
          Storage type
        </p>
        {isCustomizationMode ? (
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1">
              <input
                className="checked:bg-slate-500"
                type="radio"
                value={storageType}
                checked={storageType === "CLOUD"}
                onChange={() => {
                  setStorageType("CLOUD");
                  handleStorageTypeByLocalId(localId, "CLOUD");
                }}
              />
              <label className="text-[12px]">Cloud</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                className="checked:bg-slate-500"
                type="radio"
                value={storageType}
                checked={storageType === "EDGE"}
                onChange={() => {
                  setStorageType("EDGE");
                  handleStorageTypeByLocalId(localId, "EDGE");
                }}
              />
              <label className="text-[12px]">Edge</label>
            </div>
          </div>
        ) : (
          <>
            <label className="text-[12px]">{storageType}</label>
          </>
        )}
      </div>
      <div className="flex gap-1">
        <p className="font-semibold whitespace-nowrap text-[12px]">
          Location id:
        </p>
        <p className="text-[12px]">{`${captionInfo[localId - 1].local_id}`}</p>
      </div>
      <div className="flex gap-1">
        <p className="font-semibold whitespace-nowrap text-[12px]">
          Storage id:
        </p>
        <p className="text-[12px]">
          {storageType === "CLOUD" ? "0" : captionInfo[localId - 1].local_id}
        </p>
      </div>
      <div className="flex gap-1">
        <p className="font-semibold whitespace-nowrap text-[12px]">
          Data size:
        </p>
        <p className="text-[12px]">{`${
          captionInfo[localId - 1].data_size
        } GB`}</p>
      </div>
      <div className="flex gap-1">
        <p className="font-semibold whitespace-nowrap text-[12px]">
          # of users:
        </p>
        <p className="text-[12px]">{`${
          captionInfo[localId - 1].population
        }`}</p>
      </div>
    </div>
  );
};

const CaptionProvider = ({
  localId,
  children,
  handleStorageTypeByLocalId,
}: {
  localId: number;
  handleStorageTypeByLocalId: (localId: number, storageType: string) => void;
  children: React.ReactNode;
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      className="relative"
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => setIsHover(false)}
      whileHover={{ scale: 1.2, zIndex: 10 }}
    >
      {children}
      {isHover && (
        <Caption
          localId={localId}
          handleStorageTypeByLocalId={handleStorageTypeByLocalId}
        />
      )}
    </motion.div>
  );
};

export default CaptionProvider;
export { Caption };
