/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/shared/input/Input";
import Button from "../../components/shared/button/Button";

const AddSensor = ({ onClose, onAdd }) => {
  const [addsensorData, setAddSensorData] = useState({
    sensorName: "",
    type: "",
    ip: "",
    uniqueId: "",
    port: "",
    url: "",
    location: "",
  });

  const handleSensorChange = (e) => {
    const { name, value } = e.target;
    setAddSensorData({ ...addsensorData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addSensor(addsensorData);
      toast.success(response?.message);
      onAdd();
    } catch (error) {
      const errorMsg = error.message || "An error occurred during Add Sensor.";
      toast.error(errorMsg);
    }

    setAddSensorData({
      sensorName: "",
      type: "",
      ipAddress: "",
      uniqueId: "",
      port: "",
      url: "",
      location: "",
    });

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex gap-2">
          <div className="flex flex-col w-[100%]">
            <Input
              label="Sensor Name"
              type="text"
              placeholder="Sensor Name"
              name="sensorName"
              onChange={handleSensorChange}
              value={addsensorData.sensorName}
              required
            />
          </div>
          <div className="flex flex-col w-[100%] ">
            <Input
              label="Type"
              type="text"
              placeholder="Type"
              name="type"
              onChange={handleSensorChange}
              value={addsensorData.type}
              required
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col w-[100%] ">
            <Input
              label="IP"
              type="text"
              placeholder="IP"
              name="ip"
              onChange={handleSensorChange}
              value={addsensorData.ip}
              required
            />
          </div>
          <div className="flex flex-col w-[100%] ">
            <Input
              label="Port"
              type="text"
              placeholder="Port"
              name="port"
              onChange={handleSensorChange}
              value={addsensorData.port}
              required
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col w-[100%] ">
            <Input
              label="URL"
              labelWeight="font-semibold"
              type="text"
              placeholder="url"
              name="url"
              onChange={handleSensorChange}
              value={addsensorData.url}
              required
            />
          </div>
          <div className="flex flex-col w-[100%] ">
            <Input
              label="Location"
              type="text"
              placeholder="location"
              name="location"
              onChange={handleSensorChange}
              value={addsensorData.location}
              required
            />
          </div>
        </div>

        <div className="flex flex-col w-[100%] ">
          <Input
            label="Unique Id"
            type="text"
            placeholder="Unique Id"
            name="uniqueId"
            onChange={handleSensorChange}
            value={addsensorData.uniqueId}
            required
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button text="Cancel" onClick={onClose} />

          <Button type="submit" text="Add" />
        </div>
      </div>
    </form>
  );
};

export default AddSensor;
