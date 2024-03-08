import SectionWrapper from "./common/SectionWrapper";
import BlueLabelData from "./common/BlueLabelData";
import FormattedData from "./common/FormattedData";

const EstimatedCosts = () => {
  return (
    <SectionWrapper title="Estimated Costs">
      <div className="flex flex-col gap-2">
        <BlueLabelData blueLabelText="Monthly Cost for the distribution">
          <div className="flex items-center h-full">
            <FormattedData data={0} unit="$" />
          </div>
        </BlueLabelData>
      </div>
    </SectionWrapper>
  );
};

export default EstimatedCosts;
