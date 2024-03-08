const FormattedData = ({ data, unit }: { data: number; unit: string }) => {
  return (
    <div className="flex items-end gap-1">
      <h5 className="text-[28px] leading-[28px]">{data}</h5>
      <p className="text-[16px]">{unit}</p>
    </div>
  );
};

export default FormattedData;
