import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { RiEditBoxFill } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Modal from "../../components/modals/Modal";
import AddSensor from "./AddSensor";
import { FiPlus } from "react-icons/fi";
import EditSensor from "./EditSensor";
import { Link } from "react-router-dom";
import DeleteConfirmation from "../../components/modals/DeleteConfirmation";
import { getAllSensors } from "../../service/sensorService";
import { toast } from "react-toastify";
import { updateSensor } from "../../service/sensorService";

const columns = (modalOpenHandler, handleStatusToggle) => [
  {
    name: "Sensor Name",
    selector: (row) => row.sensorName,
  },
  {
    name: "IP",
    selector: (row) => row.ip,
  },
  {
    name: "Port",
    selector: (row) => row.port,
  },
  {
    name: "Type",
    selector: (row) => row.type,
  },
  {
    name: "Unique Id",
    selector: (row) => row.uniqueId,
  },
  // {
  //   name: "Status",
  //   selector: () => (
  //     <label className="inline-flex items-center cursor-pointer">
  //       <input type="checkbox" value="" className="sr-only peer" />
  //       <div className="relative w-11 h-6 bg-[#7BC0F733] rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#50D450]"></div>
  //     </label>
  //   ),
  // },
  {
    name: "Status",
    selector: (row) => (
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={row.status === "active"} // Adjust this based on actual backend value
          onChange={() => handleStatusToggle(row)}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-[#7BC0F733] rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#50D450]"></div>
      </label>
    ),
  },
  {
    name: "Action",
    selector: (row) => (
      <div className="flex items-center gap-3">
        {/* <Link to="/home/view-sensor">
          <div className="cursor-pointer">
            <IoEye fontSize={23} />
          </div>
        </Link> */}
        <Link to={`/home/view-sensor/${row._id}`}>
          <div className="cursor-pointer">
            <IoEye fontSize={23} />
          </div>
        </Link>

        <div
          className="cursor-pointer"
          onClick={() => modalOpenHandler("edit", row)}
        >
          <RiEditBoxFill fontSize={23} />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => modalOpenHandler("delete", row)}
        >
          <RiDeleteBin6Fill fontSize={23} style={{ color: "red" }} />
        </div>
      </div>
    ),
  },
];

const Sensors = () => {
  const [modal, setModal] = useState(false);
  const [sensors, setSensors] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(null);

  const fetchSensors = async () => {
    try {
      const response = await getAllSensors();
      setSensors(response.sensors);
      console.log("Sensors", response.sensors);
    } catch (error) {
      const errorMsg =
        error.message || "An error occurred while fetching sensors.";
      toast.error(errorMsg);
    }
  };

  useEffect(() => {
    fetchSensors();
  }, []);

  const handleStatusToggle = async (sensor) => {
    const updatedStatus = sensor.status === "active" ? "inactive" : "active";

    try {
      const { _id, userId, createdAt, updatedAt, __v, ...updatedSensorData } = {
        ...sensor,
        status: updatedStatus,
      };

      console.log("Updating sensor status:", updatedSensorData);

      const res = await updateSensor(_id, updatedSensorData);

      console.log("API response:", res);
      toast.success(res.message || "Sensor status updated");

      fetchSensors();
    } catch (error) {
      console.error("Error updating sensor status:", error);
      toast.error(error.message || "Error updating sensor status");
    }
  };

  const modalOpenHandler = (type, sensor) => {
    console.log("sensor data", sensor);

    setModal(type);
    setSelectedSensor(sensor); // Set the selected sensor for deletion
  };

  //  const modalOpenHandler = (type, sensorData) => {
  //   console.log("Selected Sensor ID:", sensorData?._id); // Log the sensor ID
  //   console.log("Selected Sensor Data:", sensorData); // Log the entire sensor data
  //   // Open modal logic here
  // };

  const modalCloseHandler = () => {
    setModal(null);
    setSelectedSensor(null); // Clear the selected sensor
  };

  return (
    <div className="parentContainer animate-slide-up">
      <div className="piechart p-4 rounded-[15px] lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
        <div className="flex items-center justify-between">
          <div>{/* <Title title="Sensors" /> */}</div>
          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer"
              onClick={() => modalOpenHandler("add")}
            >
              <FiPlus fontSize={22} />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <DataTable
            columns={columns(modalOpenHandler, handleStatusToggle)}
            data={sensors}
            selectableRows
            selectableRowsHighlight
            customStyles={tableStyles}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="70vh"
          />
        </div>
        {modal === "add" && (
          <Modal title="Add Sensor" onClose={modalCloseHandler}>
            <AddSensor onClose={modalCloseHandler} onAdd={fetchSensors} />
          </Modal>
        )}
        {modal === "edit" && (
          <Modal title="Edit Sensor" onClose={modalCloseHandler}>
            <EditSensor
              selectedSensor={selectedSensor}
              onClose={modalCloseHandler}
              refetch={fetchSensors}
            />
          </Modal>
        )}

        {modal === "delete" && (
          <Modal title="Confirmation!" onClose={modalCloseHandler}>
            <DeleteConfirmation
              selectedSensor={selectedSensor}
              onClose={modalCloseHandler}
              message="Are you sure you want to delete this sensor?"
              refetch={fetchSensors} // Ensure you pass the refetch function to refresh the list
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Sensors;

const tableStyles = {
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: 600,
      color: "rgba(17, 17, 17, 1)",
    },
  },
  rows: {
    style: {
      background: "#ECE8FF",
      borderRadius: "6px",
      padding: "14px 0",
      margin: "10px 0",
      borderBottomWidth: "0 !important",
    },
  },
  cells: {
    style: {
      color: "rgba(17, 17, 17, 1)",
      fontSize: "14px",
    },
  },
};
