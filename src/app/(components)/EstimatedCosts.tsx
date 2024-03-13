import SectionWrapper from "./common/SectionWrapper";
import BlueLabelData from "./common/BlueLabelData";
import FormattedData from "./common/FormattedData";
import { ResultType } from "@/_types/data";

const EstimatedCosts = ({ data }: { data: ResultType }) => {
  return (
    <SectionWrapper title="Estimated Costs">
      <div className="flex flex-col gap-2">
        <BlueLabelData blueLabelText="Monthly Cost for the distribution">
          <div className="flex items-center h-full">
            <FormattedData data={data["00cost"] || 0} unit="$" />
          </div>
        </BlueLabelData>
      </div>
    </SectionWrapper>
  );
};

export default EstimatedCosts;
