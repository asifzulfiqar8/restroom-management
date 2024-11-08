import Alerts from "./Alerts";
import OverallPerformance from "./OverallPerformance";
import TopBuilding from "./TopBuilding";
import AllBuildings from "./AllBuildings";
import Map from "./Map";

const Dashboard = () => {
  return (
    <section className="parentContainer">
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
        <AllBuildings />
      </div>
    </section>
  );
};

export default Dashboard;
