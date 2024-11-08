import React, { useState } from "react";
import Button from "../../components/shared/button/Button";
import PricePlans from "../../components/shared/plans/PricePlans";
import Review from "../../components/shared/plans/Review";

const Plans = () => {
  const [isTabActive, setIsActiveTab] = useState("price");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const tabsHandler = (tab) => {
    setIsActiveTab(tab);
  };
  return (
    <div className="parentContainer">
      <div className="bg-white rounded-[15px] p-4 lg:p-6">
        {/* <div>
        <Title title="Subscription Plan" />
      </div> */}
        <div className="mt-4 md:mt-5">
          <div className="flex item-center gap-7">
            <button
              onClick={() => tabsHandler("price")}
              type="button"
              // text="Price Plans"
              className={` ${
                isTabActive === "price"
                  ? "bg-[#A449EB] p-3 rounded-md text-white font-bold"
                  : "[#c1c1c126] font-bold p-3"
              }`}
              color={isTabActive === "price" ? "#fff" : "#000"}
            >
              Price Plans
            </button>

            <button
              cursor={selectedPlan ? "cursor-pointer" : "cursor-not-allowed"}
              disabled={!selectedPlan}
              onClick={() => tabsHandler("review")}
              type="button"
              // text="Price Plans"
              className={` ${
                isTabActive === "review"
                  ? "bg-[#A449EB] p-3 rounded-md text-white font-bold"
                  : "[#c1c1c126] font-bold p-3"
              }`}
              color={isTabActive === "price" ? "#fff" : "#000"}
            >
              Review
            </button>
          </div>
          <div className="mt-4 md:mt-6 pb-7">
            {isTabActive === "price" && (
              <PricePlans
                onSelectPlan={(plan) => {
                  setSelectedPlan(plan);
                  tabsHandler("review");
                }}
              />
            )}
            {isTabActive === "review" && <Review plan={selectedPlan} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
