import Alerts from "./Alerts";
import OverallPerformance from "./OverallPerformance";
import TopBuilding from "./TopBuilding";
import AllBuildings from "./AllBuildings";
import Map from "./Map";
import { Link } from "react-router-dom";
import { buildingCardData } from "../../../../data/data";
import BuildingCard from "../../../../components/card/BuildingCard";

const Dashboard = () => {
  return (
    <section className="">
      <div className=" grid grid-cols-1 xl:grid-cols-12  gap-4 ">
        <div className=" col-span-12 xl:col-span-8">
          <Map />
        </div>
        <div className=" col-span-12 xl:col-span-4">
          <Alerts />
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
        <div className=" md:col-span-12 xl:col-span-8">
          <OverallPerformance />
        </div>
        <div className=" md:col-span-12 xl:col-span-4">
          <TopBuilding />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-4">
        <div className="bg-white rounded-2xl shadow-md border-[1px] p-5">
          <div className="mb-4 flex justify-between items-center">
            <h4 className="text-[20px] font-[600] leading-[32px]">
              All Buildings
            </h4>
            <Link to="/home/building">
              <button className="text-[#A449EB]">See All</button>
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 ">
            {buildingCardData.map((id, building) => (
              <Link to={`/home/building-floor`} key={id}>
                <BuildingCard data={building} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
