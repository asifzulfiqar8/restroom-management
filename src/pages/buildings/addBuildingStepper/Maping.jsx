import React, { useState } from "react";
import Button from "../../../components/shared/button/Button";
import Input from "../../../components/shared/input/Input";
import Map from "../../../components/Map";

const Mapping = ({ setCurrentStep }) => {
  const buttonClickHandler = () => setCurrentStep((prevStep) => prevStep + 1);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const latHandler = (e) => {
    setLat(e.target.value);
  };
  const lngHandler = (e) => setLng(e.target.value);

  const latLng = {
    lat,
    lng,
  };

  return (
    <div>
      <h6 className="text-base text-primary font-medium">
        Maping
      </h6>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        <Input
          type="number"
          label="Latitude"
          placeholder="Enter Latitude"
          onChange={(e) => latHandler(e)}
        />
        <Input
          type="number"
          label="Longitude"
          placeholder="Enter Longitude"
          onChange={(e) => lngHandler(e)}
        />
      </div>

      <div className="lg:col-span-2 mt-4">
        <div className="h-[325px] rounded-lg shadow-md">
          <Map lat={lat} lng={lng} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-4 mt-4">
        <Button
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          text="Back"
          width="w-[153px]"
          bg="bg-transparent text-primary border-primary border-[1px] hover:bg-primary hover:text-white"
        />
        <Button onClick={buttonClickHandler} text="Next" width="w-[153px]" />
      </div>
    </div>
  );
};

export default Mapping;