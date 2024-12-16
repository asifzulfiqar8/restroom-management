import React from "react";
import Button from "../../../components/shared/button/Button";
import UploadModel from "./UploadModel";
import Input from "../../../components/shared/input/Input";

const GeneralInfo = ({ setCurrentStep }) => {
  const nextBtnHandler = () => setCurrentStep((prevStep) => prevStep + 1);
  return (
    <div>
      <h6 className="text-base text-primary font-medium">
        General Information
      </h6>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-3">
          <UploadModel />
        </div>
        <Input type="text" label="Building Name" placeholder="Building Name" />
        <Input type="text" label="Building Type" placeholder="Building Type" />
        <Input type="text" label="Location" placeholder="Warehouse 01, UK" />
        <Input type="text" label="Area" placeholder="Sq Ft" />
        <Input type="number" label="Total Floors" placeholder="45" />
        <Input type="text" label="Total Restrooms" placeholder="3" />
        <div className="lg:col-span-2">
          <Input type="text" label="Building Manager" placeholder="MKS" />
        </div>
        <Input type="tel" label="Phone Number" placeholder="(123) 456-8034" />
        <div className="lg:col-span-3 flex justify-end">
          <Button text="Next" onClick={nextBtnHandler} />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
