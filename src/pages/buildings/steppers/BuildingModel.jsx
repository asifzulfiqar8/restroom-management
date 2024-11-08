// /* eslint-disable react/prop-types */
// import { BiTrash } from "react-icons/bi";
// import { useState } from "react";

// const BuildingModel = ({ activeStep, handleNext, handlePrev }) => {
//   const [imageData, setImageData] = useState({
//     file: null,
//     preview: null,
//     isFileInputDisabled: false,
//   });

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImageData({
//           file,
//           preview: reader.result,
//           isFileInputDisabled: true,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveImage = () => {
//     setImageData({
//       file: null,
//       preview: null,
//       isFileInputDisabled: false,
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       if (imageData.file) {
//         formData.append("image", imageData.file);
//       }
//       formData.append("buildingId", buildingData?.building?._id);

//       handleNext(); // Call handleNext only if the upload was successful
//     } catch (error) {
//       console.error("Failed to upload image:", error);
//     }
//   };

//   return (
//     <>
//       <section id="polygon_wraper">
//         <p className="text-[#A449EB] -2 text-[17px]">Building Model</p>
//         <div className="flex flex-col items-center justify-center w-full h-full mb-3 mt-4">
//           <label
//             htmlFor="dropzone-file"
//             className={`flex flex-col items-center justify-center w-full border-2 cursor-pointer bg-gray-50 relative ${
//               imageData ? "h-[60vh]" : "h-64"
//             }`}
//           >
//             {imageData.preview ? (
//               <div className="relative w-full h-full">
//                 <img
//                   src={imageData.preview}
//                   alt="Preview"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <button
//                   onClick={handleRemoveImage}
//                   className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
//                   aria-label="Remove image"
//                 >
//                   <BiTrash className="text-gray-600" />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center justify-center w-full h-full z-10">
//                 <svg
//                   className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//                   aria-hidden="true"
//                   fill="none"
//                   viewBox="0 0 20 16"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//                   />
//                 </svg>
//                 <p className="mb-2 text-sm sm:text-lg text-gray-500 dark:text-gray-400">
//                   <span className="font-semibold">Upload Building Image</span>
//                 </p>
//               </div>
//             )}
//             <input
//               id="dropzone-file"
//               type="file"
//               className="hidden"
//               accept="image/*"
//               onChange={handleFileChange}
//               disabled={imageData.isFileInputDisabled}
//             />
//           </label>
//         </div>

//         <div className="drawPolygon">
//           <div
//             className="flex bg-white mt-5 p-5 justify-between rounded-sm"
//             style={{
//               boxShadow: "2px 1px 4px rgba(0, 0, 0, 0.3)",
//             }}
//           >
//             <div>
//               <h3>Floor 1</h3>
//             </div>
//             <div>
//               <h3>
//                 <BiTrash />
//               </h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="mt-3 border-gray-200 rounded-b">
//         <div className="flex justify-end gap-2 flex-col sm:flex-row">
//           <button
//             onClick={handlePrev}
//             disabled={activeStep === 0}
//             className="text-[#000000] border-[#000000] font-semibold shadow-sm border sm:text-sm rounded-[5px] w-full p-3 outline-none bg-[#FFFFFF] max-w-[200px]"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit} // Trigger the submit function
//             className="text-[#FFFFFF] font-semibold  text-[17px] rounded-[5px] w-full p-3 outline-none  ml-3 max-w-[200px]"
//             style={{
//               background: "#039099",
//             }}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { addBuildingData } from "../../../redux/reducers/buildingSlice";
import Button from "../../../components/shared/button/Button";

const BuildingModel = ({
  activeStep,
  handleNext,
  handlePrev,
  buildingData,
}) => {
  const dispatch = useDispatch(); // Initialize useDispatch
  const buildingDataFromStore = useSelector((state) => state.buildings.data); // Get existing building data from the store
  const [imageData, setImageData] = useState({
    file: null,
    preview: null,
    isFileInputDisabled: false,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData({
          file,
          preview: reader.result,
          isFileInputDisabled: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageData({
      file: null,
      preview: null,
      isFileInputDisabled: false,
    });
  };

  const handleSubmit = async () => {
    try {
      // Create a new building info object
      const buildingInfo = {
        buildingId: buildingData?.building?._id,
        image: imageData.file ? imageData.preview : null, // Add the image data
        // You can add any other information from buildingData if needed
      };

      // Combine the new building info with existing building data from the store
      const updatedBuildingsData = [...buildingDataFromStore, buildingInfo];

      // Dispatch the action with the updated array
      dispatch(addBuildingData(updatedBuildingsData));

      // Log updated building data to the console
      console.log("Updated Building Data:", updatedBuildingsData);

      handleNext(); // Call handleNext only if the upload was successful
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  return (
    <>
      <section id="polygon_wraper">
        <p className="text-[#A449EB] -2 text-[17px]">Building Model</p>
        <div className="flex flex-col items-center justify-center w-full h-full mb-3 mt-4">
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col items-center justify-center w-full border-2 cursor-pointer bg-gray-50 relative ${
              imageData ? "h-[60vh]" : "h-64"
            }`}
          >
            {imageData.preview ? (
              <div className="relative w-full h-full">
                <img
                  src={imageData.preview}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
                  aria-label="Remove image"
                >
                  <BiTrash className="text-gray-600" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full z-10">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                <p className="mb-2 text-sm sm:text-lg text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Upload Building Image</span>
                </p>
              </div>
            )}
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
              disabled={imageData.isFileInputDisabled}
            />
          </label>
        </div>

        <div className="drawPolygon">
          <div
            className="flex bg-white mt-5 p-5 justify-between rounded-sm"
            style={{
              boxShadow: "2px 1px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div>
              <h3>Floor 1</h3>
            </div>
            <div>
              <h3>
                <BiTrash />
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-3 border-gray-200 rounded-b">
        <div className="flex flex-col md:flex-row justify-end mt-4 gap-3">
          <Button
            text="Previous"
            onClick={handlePrev}
            disabled={activeStep === 0}
            width="w-full md:w-[100px]"
            bg="bg:transparent text-[#A449EB] border-[1px] border-[#A449EB] hover:bg-[#A449EB] hover:text-white"
          />

          <Button
            text="Next"
            onClick={handleSubmit}
            width="w-full md:w-[100px]"
          />
        </div>
      </div>
    </>
  );
};

export default BuildingModel;
