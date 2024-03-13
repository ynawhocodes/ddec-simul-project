const LevelOption = ({
  index,
  en,
  kr,
  checked,
  onChange,
}: {
  index: number;
  en: string;
  kr: string;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <div
      className={`bg-white basis-[1/6] flex flex-col items-center justify-between min-w-[220px] p-5 rounded-xl hover:bg-[#eee] pointer-cursor ${
        checked && "bg-[#5D63F1]/10"
      }`}
      onClick={onChange}
    >
      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-[20px]">{index}</h3>
        <h3 className="text-[14px]">Level.{index}</h3>
        <h3 className="text-[14px] font-semibold whitespace-break-spaces text-center">
          {en}
        </h3>
      </div>
      <div className="flex flex-col">
        <p className="text-[14px] whitespace-break-spaces text-center">{kr}</p>
      </div>
      <input
        className="w-8 h-8 checked:bg-[#5D63F1]"
        type="radio"
        value={index}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default LevelOption;
