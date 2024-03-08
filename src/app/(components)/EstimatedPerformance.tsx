import BlueLabelData from "./common/BlueLabelData";
import FormattedData from "./common/FormattedData";
import FormattedDataWithLabel from "./common/FormattedDataWithLabel";
import SectionWrapper from "./common/SectionWrapper";

const EstimatedPerformance = () => {
  return (
    <SectionWrapper title="Estimated Performance">
      <div className="flex flex-col gap-5">
        <BlueLabelData blueLabelText="Average response time">
          <div className="flex gap-2">
            <FormattedDataWithLabel label="total" data={0} unit="ms" />
            <FormattedDataWithLabel label="cloud" data={0} unit="ms" />
            <FormattedDataWithLabel label="edge" data={0} unit="ms" />
          </div>
        </BlueLabelData>
        <BlueLabelData blueLabelText="Success rate">
          <div className="flex gap-2">
            <FormattedDataWithLabel label="total" data={0} unit="%" />
            <FormattedDataWithLabel label="cloud" data={0} unit="%" />
            <FormattedDataWithLabel label="edge" data={0} unit="%" />
          </div>
        </BlueLabelData>
        <BlueLabelData blueLabelText="Response time (min, max)">
          <div className="flex gap-2">
            <FormattedDataWithLabel label="min" data={0} unit="ms" />
            <FormattedDataWithLabel label="max" data={0} unit="ms" />
          </div>
        </BlueLabelData>
        <BlueLabelData blueLabelText="Range of benefit">
          <div className="flex items-center h-full">
            <FormattedData data={0} unit="users" />
          </div>
        </BlueLabelData>
        <BlueLabelData blueLabelText="Latency difference">
          <div className="flex items-center h-full">
            <FormattedData data={0} unit="%" />
          </div>
        </BlueLabelData>
      </div>
    </SectionWrapper>
  );
};

export default EstimatedPerformance;
