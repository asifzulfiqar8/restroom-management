import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addSensor } from "../../service/sensorService";

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
            <Label label="Sensor Name" />
            <input
              labelWeight="font-semibold"
              type="text"
              className="w-full p-2 outline-none border-gray-300 bg-[#FFFFFF] border-[1px] border-[#00000040] rounded"
              placeholder="Sensor Name"
              name="sensorName"
              onChange={handleSensorChange}
              value={addsensorData.sensorName}
              required
            />
          </div>
          <div className="flex flex-col w-[100%] ">
            <Label label="Type" />
            <input
              labelWeight="font-semibold"
              type="text"
              className="w-full p-2 outline-none border-gray-300 bg-[#FFFFFF] border-[1px] border-[#00000040] rounded"
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
            <Label label="IP" />
            <input
              labelWeight="font-semibold"
              type="text"
              className="w-full p-2 outline-none border-gray-300 bg-[#FFFFFF] border-[1px] border-[#00000040] rounded"
              placeholder="IP"
              name="ip"
              onChange={handleSensorChange}
              value={addsensorData.ip}
              required
            />
          </div>
          <div className="flex flex-col w-[100%] ">
            <Label label="Port" />
            <input
              labelWeight="font-semibold"
              type="text"
              className="w-full p-2 outline-none border-gray-300 bg-[#FFFFFF] border-[1px] border-[#00000040] rounded"
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
            <Label label="Url" />
            <input
              labelWeight="font-semibold"
              type="text"
              className="w-full p-2 outline-none border-gray-300 bg-[#FFFFFF] border-[1px] border-[#00000040] rounded"
              placeholder="url"
              name="url"
              onChange={handleSensorChange}
              value={addsensorData.url}
              required
            />
          </div>
          <div className="flex flex-col w-[100%] ">
            <Label label="location" />
            <input
              labelWeight="font-semibold"
              type="text"
              className="w-full p-2 outline-none border-gray-300 bg-[#FFFFFF] border-[1px] border-[#00000040] rounded"
              placeholder="location"
              name="location"
              onChange={handleSensorChange}
              value={addsensorData.location}
              required
            />
          </div>
        </div>

        <div className="flex flex-col w-[100%] ">
          <Label label="Unique Id" />
          <input
            labelWeight="font-semibold"
            type="text"
            className="w-full p-2 outline-none border-gray-300 bg-[#FFFFFF] border-[1px] border-[#00000040] rounded"
            placeholder="Unique Id"
            name="uniqueId"
            onChange={handleSensorChange}
            value={addsensorData.uniqueId}
            required
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            onClick={onClose}
            className="px-8 py-2 bg-[#ACACAC25] text-black rounded "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-2 bg-purple-600 text-white rounded disabled:opacity-50"
            style={{
              background: "linear-gradient(to bottom, #039099, #C51FFF)",
            }}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddSensor;

const Label = ({ label }) => (
  <label className="text-[#000] text-base mb-2 block font-[500]">{label}</label>
);
