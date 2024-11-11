import React from "react";
import Button from "../../../components/shared/button/Button";

const Maping = ({ setCurrentStep }) => {
  const nextBtnHandler = () => setCurrentStep((prevStep) => prevStep + 1);
  return (
    <div>
      <h6 className="text-base text-primary font-medium">
        Maping
      </h6>

      <div className="flex items-center justify-end gap-4">
        <Button
          text="Back"
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          bg="bg-[#ACACAC40] text-[#111111B2] hover:bg-primary hover:text-white"
        />
        <Button text="Next" onClick={nextBtnHandler} />
      </div>
    </div>
  );
};

export default Maping;
