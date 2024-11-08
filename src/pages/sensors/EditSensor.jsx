import { useState, useEffect } from "react";
import { updateSensor } from "../../service/sensorService";
import { toast } from "react-toastify";

const EditSensor = ({ selectedSensor, onClose, refetch }) => {
  const [editSensor, setEditSensor] = useState({
    sensorName: "",
    type: "",
    ip: "",
    uniqueId: "",
    port: "",
    url: "",
    location: "",
  });

  useEffect(() => {
    if (selectedSensor) {
      setEditSensor({
        sensorName: selectedSensor.sensorName || "",
        type: selectedSensor.type || "",
        ip: selectedSensor.ip || "",
        uniqueId: selectedSensor.uniqueId || "",
        port: selectedSensor.port || "",
        location: selectedSensor.location || "",
        url: selectedSensor.url || "",
      });
    }
  }, [selectedSensor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditSensor((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await updateSensor(selectedSensor._id, editSensor);
      toast.success(res?.message || " Sensor updates successfully");
      refetch();
      onClose();
    } catch (error) {
      console.error("Failed to update sensor:", error);
      toast.error(error?.data?.message || "An error occurred while Updating.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex gap-2">
          <div className="flex flex-col w-[100%]">
            <Label label="Sensor Name" />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 bg-[#FFFFFF] border-[#00000040] rounded"
              placeholder="Sensor Name"
              name="sensorName"
              value={editSensor.sensorName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <Label label="Type" />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 bg-[#FFFFFF] border-[#00000040] rounded"
              placeholder="Type"
              name="type"
              value={editSensor.type}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col w-[100%]">
            <Label label="IP" />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 bg-[#FFFFFF] border-[#00000040] rounded"
              placeholder="IP"
              name="ip"
              value={editSensor.ip}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <Label label="Port" />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 bg-[#FFFFFF] border-[#00000040] rounded"
              placeholder="Port"
              name="port"
              value={editSensor.port}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col w-[100%]">
            <Label label="Unique Id" />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 bg-[#FFFFFF] border-[#00000040] rounded"
              placeholder="Unique Id"
              name="uniqueId"
              value={editSensor.uniqueId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <Label label="Url" />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 bg-[#FFFFFF] border-[#00000040] rounded"
              placeholder="Unique Id"
              name="uniqueId"
              value={editSensor.url}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-col w-[100%]">
          <Label label="location" />
          <input
            type="text"
            className="w-full p-2 border border-gray-300 bg-[#FFFFFF] border-[#00000040] rounded"
            placeholder="Unique Id"
            name="location"
            value={editSensor.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-2 bg-[#ACACAC25] text-black rounded"
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
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditSensor;

const Label = ({ label }) => (
  <label className="text-[#000] text-base mb-2 block font-[500]">{label}</label>
);
