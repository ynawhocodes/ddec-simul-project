import FormattedData from "./FormattedData";

const FormattedDataWithLabel = ({
  label,
  data,
  unit,
}: {
  label: string;
  data: number;
  unit: string;
}) => {
  return (
    <div className="flex flex-col gap-1 items-center basis-[33%]">
      <label className="text-[12px] text-gray-500">{label}</label>
      <FormattedData data={data} unit={unit} />
    </div>
  );
};

export default FormattedDataWithLabel;
