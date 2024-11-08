import React from "react";
import PieChartComponent from "../../../../components/charts/pieChart/PieChart";
import Building from "../../../../../public/assets/images/dashboard/Building";

const TopBuilding = () => {
  return (
    <div className="piechart p-5">
      <div className="flex gap-1 items-center">
        <Building />
        <h2 className="text-[20px] leading-[30px] font-[500] ">
          Top Buildings
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <PieChartComponent />
      </div>
    </div>
  );
};

export default TopBuilding;
