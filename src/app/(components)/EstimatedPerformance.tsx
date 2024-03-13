import { ResultType } from "@/_types/data";
import BlueLabelData from "./common/BlueLabelData";
import FormattedData from "./common/FormattedData";
import FormattedDataWithLabel from "./common/FormattedDataWithLabel";
import SectionWrapper from "./common/SectionWrapper";

const EstimatedPerformance = ({ data }: { data: ResultType }) => {
  return (
    <SectionWrapper title="Estimated Performance">
      <div className="flex flex-col gap-5">
        <BlueLabelData blueLabelText="Average response time">
          <div className="flex gap-2">
            <FormattedDataWithLabel
              label="total"
              data={data["01avg_response_time"] || 0}
              unit="ms"
            />
            <FormattedDataWithLabel
              label="cloud"
              data={data["03avg_response_time_in_cloud"] || 0}
              unit="ms"
            />
            <FormattedDataWithLabel
              label="edge"
              data={data["02avg_response_time_in_edge"] || 0}
              unit="ms"
            />
          </div>
        </BlueLabelData>
        <BlueLabelData blueLabelText="Success rate">
          <div className="flex gap-2">
            <FormattedDataWithLabel
              label="total"
              data={data["06success_rate_in_downtime($s)"] || 0}
              unit="%"
            />
            <FormattedDataWithLabel
              label="cloud"
              data={data["08success_rate_in_downtime($s) - cloud"] || 0}
              unit="%"
            />
            <FormattedDataWithLabel
              label="edge"
              data={data["07success_rate_in_downtime($s) - edge"] || 0}
              unit="%"
            />
          </div>
        </BlueLabelData>
        <BlueLabelData blueLabelText="Response time (min, max)">
          <div className="flex gap-2">
            <FormattedDataWithLabel
              label="min"
              data={data["04min_response_time"] || 0}
              unit="ms"
            />
            <FormattedDataWithLabel
              label="max"
              data={data["05max_response_time"] || 0}
              unit="ms"
            />
          </div>
        </BlueLabelData>
        <BlueLabelData blueLabelText="Range of benefit">
          <div className="flex items-center h-full">
            <FormattedData
              data={data["09range_of_benefit(edge)"] || 0}
              unit="users"
            />
          </div>
        </BlueLabelData>
        <BlueLabelData blueLabelText="Latency difference">
          <div className="flex items-center h-full">
            <FormattedData data={data["10latency_difference"] || 0} unit="%" />
          </div>
        </BlueLabelData>
      </div>
    </SectionWrapper>
  );
};

export default EstimatedPerformance;
