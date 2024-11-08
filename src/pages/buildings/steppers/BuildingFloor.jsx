// import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const GeneralInformation = ({ handlePrev }) => {

//   const [selectedSensors, setSelectedSensors] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [sensors, setSensors] = useState([]);

//   const [formData, setFormData] = useState({
//     floor: '',
//     rooms: '',
//     status: '',
//     area: '',
//     toilets: '',
//   });

//   const [imageData, setImageData] = useState({ file: null, preview: '' });

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (data && data.data) {
//       setSensors(data.data);
//     }
//   }, [data]);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImageData({
//           file,
//           preview: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const toggleDropdown = () => setShowDropdown(!showDropdown);

//   const handleSelectSensor = (sensor) => {
//     if (!selectedSensors.find((s) => s._id === sensor._id)) {
//       setSelectedSensors((prev) => [...prev, sensor]);
//       setSensors((prev) => prev.filter((s) => s._id !== sensor._id));
//     }
//     setShowDropdown(false); // Close the dropdown after selection
//   };

//   const handleRemoveSensor = (sensorId) => {
//     setSelectedSensors((prev) => prev.filter((sensor) => sensor._id !== sensorId));
//     const removedSensor = selectedSensors.find((sensor) => sensor._id === sensorId);
//     if (removedSensor) {
//       setSensors((prev) => [...prev, removedSensor]);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!formData.floor || !formData.rooms || !formData.status || !formData.area || !formData.toilets) {
//       toast.error('All fields are required');
//       return;
//     }

//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       formDataToSend.append(key, formData[key]);
//     }
//     formDataToSend.append('sensors', JSON.stringify(selectedSensors)); // Appending sensors as JSON
//     if (imageData.file) {
//       formDataToSend.append('image', imageData.file);
//     }

//     try {
//       const res = await addFloor({ data: formDataToSend, id: buildingData?.building?._id }).unwrap();
//       if (res.success) {
//         toast.success(res?.message);
//         setTimeout(() => navigate('/home/building'), 1000);
//       }
//     } catch (error) {
//       toast.error(error.data.message);
//     }
//   };

//   return (
//     <form className="space-y-4">
//       <div className="space-y-4">
//         <p className="text-[#A449EB] text-[22px] font-bold">Floor</p>
//         <div className="border p-3 rounded-lg shadow-sm">
//           <div className="p-2 bg-white">
//             <h3 className="text-[#A449EB] text-[24px] mb-2 font-[600]">Restroom No 1</h3>
//             <div className="relative flex flex-col items-center justify-center w-full border-2 cursor-pointer bg-gray-50" style={{ height: '600px' }}>
//               <input
//                 type="file"
//                 name="image"
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//                 accept="image/*"
//                 onChange={handleFileChange}
//               />
//               {imageData.preview ? (
//                 <img
//                   src={imageData.preview}
//                   alt="Preview"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="flex flex-col items-center justify-center w-full h-full text-gray-500">
//                   <svg className="w-8 h-8 mb-4" aria-hidden="true" fill="none" viewBox="0 0 20 16">
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//                     />
//                   </svg>
//                   <p className="text-sm">
//                     <span className="font-semibold">Upload Building Image</span>
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 mt-4">
//               <div>
//                 <label className="block mb-1 text-sm font-bold text-black">
//                   Floor Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="floor"
//                   value={formData.floor}
//                   onChange={handleInputChange}
//                   placeholder="Floor Name"
//                   className="shadow-sm border-[1px] border-gray-300 sm:text-sm rounded-md w-full p-3 outline-none bg-[#FFFFFF] text-[#111111]"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm font-bold text-black">
//                   Number of Rooms <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="rooms"
//                   value={formData.rooms}
//                   onChange={handleInputChange}
//                   placeholder="Number of Rooms"
//                   className="shadow-sm border-[1px] border-gray-300 sm:text-sm rounded-md w-full p-3 outline-none bg-[#FFFFFF] text-[#111111]"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm font-bold text-black">
//                   Status <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="status"
//                   value={formData.status}
//                   onChange={handleInputChange}
//                   placeholder="Status"
//                   className="shadow-sm border-[1px] border-gray-300 sm:text-sm rounded-md w-full p-3 outline-none bg-[#FFFFFF] text-[#111111]"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 mt-4">
//               <div>
//                 <label className="block mb-1 text-sm font-bold text-black">
//                   Area <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="area"
//                   value={formData.area}
//                   onChange={handleInputChange}
//                   placeholder="Area"
//                   className="shadow-sm border-[1px] border-gray-300 sm:text-sm rounded-md w-full p-3 outline-none bg-[#FFFFFF] text-[#111111]"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm font-bold text-black">
//                   Number of Toilets <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="toilets"
//                   value={formData.toilets}
//                   onChange={handleInputChange}
//                   placeholder="Number of Toilets"
//                   className="shadow-sm border-[1px] border-gray-300 sm:text-sm rounded-md w-full p-3 outline-none bg-[#FFFFFF] text-[#111111]"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//       {/* Sensors section */}
//       <div className="space-y-4 mt-4">
//         <p className="text-[#A449EB] text-[22px] font-bold">Sensors</p>
//         <div className="flex flex-col space-y-4 relative">
//           <button
//             type="button"
//             onClick={toggleDropdown}
//             className="shadow-sm border-[1px] border-gray-300 sm:text-sm rounded-md p-3 outline-none bg-[#FFFFFF] text-[#111111]"
//           >
//             {selectedSensors?.length >= 0 ? 'Select a Sensor' : 'No Sensor Selected'}
//           </button>

//           {showDropdown && (
//             <ul className="absolute bg-white shadow-lg border border-gray-300 rounded-md mt-2 w-full z-10">
//               {sensors?.length > 0 ? (
//                 sensors?.map((sensor) => (
//                   <li
//                     key={sensor?._id}
//                     onClick={() => handleSelectSensor(sensor)}
//                     className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                   >
//                     {sensor?.sensorName}
//                   </li>
//                 ))
//               ) : (
//                 <li className="px-4 py-2 text-gray-500">
//                   Sensor Not Found
//                 </li>
//               )}
//             </ul>
//           )}

//           <ul className="mt-4 pt-2">
//             {selectedSensors.map(sensor => (
//               <li key={sensor._id} className="flex items-center justify-between rounded-md shadow-[0_0_5px_0_rgba(0,0,0,0.1)] p-4 mt-2">
//                 {sensor?.sensorName}
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveSensor(sensor._id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//         </div>
//       </div>

//       <div className="flex justify-end">
//         <button
//           type="button"
//           onClick={handlePrev}
//           className="mt-4 px-6 py-2 text-[#A449EB] font-semibold border border-[#A449EB] rounded-md hover:bg-[#A449EB] hover:text-white transition-all duration-300"
//         >
//           Previous
//         </button>
//         <button
//           type="button"
//           onClick={handleSubmit}
//           className="ml-4 mt-4 px-6 py-2 bg-[#A449EB] text-white font-semibold rounded-md hover:bg-[#7b2abf] transition-all duration-300"
//         >
//           Next
//         </button>
//       </div>
//     </form>
//   );
// };

// export default GeneralInformation;

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAllSensors } from "../../../service/sensorService";
import Input from "../../../components/shared/input/Input";
import Button from "../../../components/shared/button/Button";
import { FaChevronDown } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Modal from "../../../components/modals/Modal";
import { IoAddOutline } from "react-icons/io5";
import Dropdown from "../../../components/shared/dropdown/Dropdown";

const GeneralInformation = ({ handlePrev, buildingData }) => {
  const handleSubmit = async () => {
    if (
      !formData.floor ||
      !formData.rooms ||
      !formData.status ||
      !formData.area ||
      !formData.toilets
    ) {
      toast.error("All fields are required");
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    formDataToSend.append("sensors", JSON.stringify(selectedSensors)); // Appending sensors as JSON
    if (imageData.file) {
      formDataToSend.append("image", imageData.file);
    }

    try {
      const res = await addFloor({
        data: formDataToSend,
        id: buildingData?.building?._id,
      }).unwrap();
      if (res.success) {
        toast.success(res?.message);
        setTimeout(() => navigate("/home/building"), 1000);
      }
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  let floorCount = new Array(3).fill();
  console.log(floorCount);

  return (
    <form className="space-y-4">
      <div className="space-y-4">
        <p className="text-[#A449EB] text-base font-bold">Restrooms</p>
        {floorCount.map((floor, i) => (
          <div key={i} className="my-4">
            <Accordion floorNumber={i + 1} />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-end mt-4 gap-3">
        <Button
          type="button"
          onClick={handlePrev}
          bg="bg:transparent text-[#A449EB] border-[1px] border-[#A449EB] hover:bg-[#A449EB] hover:text-white"
          text="Previous"
          width="w-full md:w-[100px]"
        />

        <Button
          type="button"
          onClick={handleSubmit}
          text="Save"
          width="w-full md:w-[100px]"
        />
      </div>
    </form>
  );
};

export default GeneralInformation;

const Accordion = ({ floorNumber }) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const handleOpenAccordion = () => {
    setOpenAccordion(!openAccordion);
  };
  return (
    <div className="border-[1px]  rounded-xl shadow-sm">
      <div
        className={`cursor-pointer hover:bg-[#00000005]  ${
          openAccordion && "border-b-[1px]"
        }`}
        onClick={handleOpenAccordion}
      >
        <div className="flex justify-between items-center p-5">
          <h3 className="text-[#A449EB] text-sm md:text-base mb-2 font-[600]">
            Restroom {floorNumber}
          </h3>
          <span
            className={`transition-all duration-300  ${
              openAccordion ? "rotate-180" : "rotate-0"
            }`}
          >
            <FaChevronDown fontSize={12} className="text-[#9CA3AF]" />
          </span>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ${
          openAccordion ? "h-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {openAccordion && (
          <div className="p-5">
            <AccordionBody />
          </div>
        )}
      </div>
    </div>
  );
};

const AccordionBody = () => {
  const [selectedSensors, setSelectedSensors] = useState([]);
  const [sensors, setSensors] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    floor: "",
    rooms: "",
    status: "",
    area: "",
    toilets: "",
  });

  const modalHandler = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  const [imageData, setImageData] = useState({ file: null, preview: "" });

  const navigate = useNavigate();

  useEffect(() => {
    const getSensors = async () => {
      try {
        const response = await getAllSensors();
        console.log("Fetched sensors response:", response); // Debugging log
        if (response.success && Array.isArray(response.sensors)) {
          setSensors(response.sensors);
        } else {
          toast.error("Failed to fetch sensors.");
        }
      } catch (error) {
        toast.error("An error occurred while fetching sensors.");
      }
    };

    getSensors(); // Call the fetch function on component mount
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData({
          file,
          preview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleSelectSensor = (sensor) => {
    if (!selectedSensors.find((s) => s._id === sensor._id)) {
      setSelectedSensors((prev) => [...prev, sensor]);
      setSensors((prev) => prev.filter((s) => s._id !== sensor._id));
    }
    setShowDropdown(false); // Close the dropdown after selection
  };

  const handleRemoveSensor = (sensorId) => {
    setSelectedSensors((prev) =>
      prev.filter((sensor) => sensor._id !== sensorId)
    );
    const removedSensor = selectedSensors.find(
      (sensor) => sensor._id === sensorId
    );
    if (removedSensor) {
      setSensors((prev) => [...prev, removedSensor]); // Add back the removed sensor
    }
  };
  return (
    <div>
      <div className=" rounded-lg shadow-sm">
        <div
          className="relative flex flex-col items-center justify-center w-full border-2 cursor-pointer bg-gray-50"
          style={{ height: "600px" }}
        >
          <input
            type="file"
            name="image"
            className="absolute inset-0 opacity-0 cursor-pointer"
            accept="image/*"
            onChange={handleFileChange}
          />
          {imageData.preview ? (
            <img
              src={imageData.preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-gray-500">
              <svg
                className="w-8 h-8 mb-4"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-sm">
                <span className="font-semibold">Upload Building Image</span>
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 mt-4">
          <div>
            <Input
              label="Floor Name"
              type="text"
              name="floor"
              value={formData.floor}
              onChange={handleInputChange}
              placeholder="Floor Name"
            />
          </div>

          <div>
            <Dropdown
              options={[{ option: "Public" }, { option: "Private" }]}
              label="Type"
              // value={formData.rooms}
              // onChange={handleInputChange}
              // placeholder="Number of Rooms"
            />
          </div>

          <div>
            <Dropdown
              options={[{ option: "Active" }, { option: "Inactive" }]}
              label="Status"
              // value={formData.rooms}
              // onChange={handleInputChange}
              // placeholder="Number of Rooms"
            />
          </div>

          <div>
            <div>
              <Dropdown
                options={[{ option: "Sq ft" }, { option: "m" }]}
                label="Area"
                // value={formData.rooms}
                // onChange={handleInputChange}
                // placeholder="Number of Rooms"
              />
            </div>
          </div>

          <div>
            <Input
              label="Number of Toilets"
              type="number"
              name="toilets"
              value={formData.toilets}
              onChange={handleInputChange}
              placeholder="Number of Toilets"
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-end">
            <button
              onClick={modalHandler}
              className="border-[1px] border-[#078E9B] text-[#078E9B] font-bold  gap-1 text-sm rounded-md p-3 flex justify-center items-center"
            >
              <IoAddOutline fontSize={20} />
              Select Sensors
            </button>
          </div>
          {openModal && (
            <Modal
              onClose={modalHandler}
              title="Select Sensor"
              width="w-[320px] md:w-[450px]"
            >
              {sensors.map((sensor) => (
                <div
                  key={sensor._id}
                  className="p-2 cursor-pointer border-[1px] my-1 rounded-md"
                  onClick={() => handleSelectSensor(sensor)}
                >
                  {sensor.sensorName}
                </div>
              ))}
            </Modal>
          )}
          {/* <div className="relative">
            <div
              className="border p-3 rounded-lg cursor-pointer bg-gray-100"
              onClick={toggleDropdown}
            >
              {selectedSensors.length === 0
                ? "Select Sensors"
                : selectedSensors.map((sensor) => sensor.name).join(", ")}
            </div>
            {showDropdown && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg w-full mt-1 max-h-60 overflow-auto">
                {sensors.map((sensor) => (
                  <div
                    key={sensor._id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectSensor(sensor)}
                  >
                    {sensor.sensorName}
                  </div>
                ))}
              </div>
            )}
          </div> */}
          {/* Display selected sensors */}
          <div className="mt-2">
            {selectedSensors.map((sensor) => (
              <>
                <div
                  key={sensor._id}
                  className="flex justify-between items-center shadow-md border-[1px] my-2 rounded-md py-4 px-3"
                >
                  <span className="text-[#078E9B] text-sm">
                    {sensor.sensorName}
                  </span>
                  <div className="flex items-center gap-5">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="relative w-11 h-6 bg-[#7BC0F733] rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#50D450]"></div>
                    </label>

                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveSensor(sensor._id)}
                    >
                      <RiDeleteBin6Fill
                        className="text-red-900"
                        fontSize={20}
                      />
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
