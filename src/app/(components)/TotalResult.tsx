import BlueLabelData from "./common/BlueLabelData";
import FormattedData from "./common/FormattedData";
import SectionWrapper from "./common/SectionWrapper";

const TotalResult = () => {
  return (
    <SectionWrapper title="Total Result">
      <div className="flex gap-2">
        <BlueLabelData blueLabelText="Total Cost">
          <div className="flex items-center h-full">
            <FormattedData data={0} unit="$" />
          </div>
        </BlueLabelData>
        <BlueLabelData blueLabelText="Total improvement">
          <div className="flex items-center h-full">
            <FormattedData data={0} unit="%" />
          </div>
        </BlueLabelData>
      </div>
    </SectionWrapper>
  );
};

export default TotalResult;
