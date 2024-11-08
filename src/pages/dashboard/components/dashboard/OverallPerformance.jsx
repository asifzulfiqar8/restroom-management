import React from "react";
import AreaCharts from "../../../../components/charts/areaChart/AreaChart";

const OverallPerformance = () => {
  return (
    <div className="piechart py-5">
      <AreaCharts
        width="100%"
        height={300}
        title="Overall Performance"
        showXAxis={true}
        showYAxis={true}
        showGrid={true}
      />
    </div>
  );
};

export default OverallPerformance;
