import BlueLabelData from "./common/BlueLabelData";
import FormattedData from "./common/FormattedData";
import SectionWrapper from "./common/SectionWrapper";

const TotalResult = () => {
  return (
    <SectionWrapper title="Total Result">
      <div className="flex gap-2">
        <BlueLabelData blueLabelText="Total Cost">
          <FormattedData data={0} unit="$" />
        </BlueLabelData>
        <BlueLabelData blueLabelText="Total improvement">
          <FormattedData data={0} unit="%" />
        </BlueLabelData>
      </div>
    </SectionWrapper>
  );
};

export default TotalResult;
