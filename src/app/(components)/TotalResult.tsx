import { ResultType } from "@/_types/data";
import BlueLabelData from "./common/BlueLabelData";
import FormattedData from "./common/FormattedData";
import SectionWrapper from "./common/SectionWrapper";

const TotalResult = ({ data }: { data: ResultType }) => {
  return (
    <SectionWrapper title="Total Result">
      <div className="flex gap-2">
        <BlueLabelData blueLabelText="Total Cost">
          <div className="flex items-center h-full">
            <FormattedData data={data["11total_cost"] || 0} unit="$" />
          </div>
        </BlueLabelData>
        <BlueLabelData blueLabelText="Total improvement">
          <div className="flex items-center h-full">
            <FormattedData data={data["12total_improvement"] || 0} unit="%" />
          </div>
        </BlueLabelData>
      </div>
    </SectionWrapper>
  );
};

export default TotalResult;
