import { useState } from "react";
import { Stepper, Step } from "@material-tailwind/react";
import AddBuilding from "./steppers/GeneralInformation";
import BuildingModel from "./steppers/BuildingModel";
import Mapping from "./steppers/Mapping";
import BuildingFloor from "./steppers/BuildingFloor";

const AddBuildingStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([
    true,
    false,
    false,
    false,
  ]);

  const handleNext = () => {
    if (activeStep < 3) {
      setCompletedSteps((prev) => {
        const newCompletedSteps = [...prev];
        newCompletedSteps[activeStep] = true;
        return newCompletedSteps;
      });
      setActiveStep((cur) => Math.min(cur + 1, 3));
    }
  };

  const handlePrev = () => setActiveStep((cur) => Math.max(cur - 1, 0));

  const handleStepClick = (stepIndex) => {
    if (stepIndex <= activeStep) {
      setActiveStep(stepIndex);
    }
  };

  return (
    <div className="parentContainer none lg:display-block">
      <div className="piechart p-6 ">
        <div className="flex items-center flex-col md:flex-row gap-4">
          <div>
            <h2 className="text-1xl flex font-semibold sm:text-3xl">
              Add Building
            </h2>
          </div>
          <Stepper
            activeStep={activeStep}
            className="relative right-100 xlright-12 w-[80%] mx-auto"
          >
            {[0, 1, 2, 3].map((stepIndex) => (
              <Step
                key={stepIndex}
                onClick={() => handleStepClick(stepIndex)}
                className={`relative flex items-center justify-center cursor-pointer ${
                  stepIndex <= activeStep ? "text-white" : "text-gray-600"
                }`}
              >
                <div
                  className={`relative flex flex-col items-center justify-center z-10 ${
                    stepIndex <= activeStep
                      ? "bg-[#A449EB] text-white" // Active and completed steps: purple background, white text
                      : "bg-gray-200 text-black" // Inactive steps: gray background, gray text
                  } w-12 h-10 flex items-center justify-center rounded-full`}
                >
                  <div className="text-lg font-[500]">{stepIndex + 1}</div>
                  <div
                    className={`text-center absolute font-[500] top-full mt-2 hidden sm:block ${
                      stepIndex <= activeStep ? "text-[#A449EB]" : "text-black"
                    } z-10`}
                  >
                    {stepIndex === 0 && "General Information"}
                    {stepIndex === 1 && "Building Model"}
                    {stepIndex === 2 && "Mapping"}
                    {stepIndex === 3 && "Building Floor"}
                  </div>
                  <div
                    className={`absolute left-1/2 top-0 -translate-x-1/2 w-full ${
                      stepIndex < activeStep ? "bg-[#A449EB]" : ""
                    } z-0`}
                  />
                </div>
              </Step>
            ))}
          </Stepper>
        </div>

        <div className="mt-16">
          {activeStep === 0 && (
            <AddBuilding
              handleNext={handleNext}
              handlePrev={handlePrev}
              activeStep={activeStep}
            />
          )}
          {activeStep === 1 && (
            <BuildingModel
              handleNext={handleNext}
              handlePrev={handlePrev}
              activeStep={activeStep}
            />
          )}
          {activeStep === 2 && (
            <Mapping
              handleNext={handleNext}
              handlePrev={handlePrev}
              activeStep={activeStep}
            />
          )}
          {activeStep === 3 && (
            <BuildingFloor
              handleNext={handleNext}
              handlePrev={handlePrev}
              activeStep={activeStep}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBuildingStepper;
