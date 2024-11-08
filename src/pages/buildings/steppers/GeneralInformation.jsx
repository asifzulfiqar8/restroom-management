/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import loader from "../../../assets/loader.gif";
import { addBuildingData } from "../../../redux/reducers/buildingSlice";
import Input from "../../../components/shared/input/Input";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import Button from "../../../components/shared/button/Button";
const AddBuilding = ({ handleNext, handlePrev, activeStep }) => {
  const dispatch = useDispatch();
  const [generalInfo, setGeneralInfo] = useState({
    buildingName: "",
    buildingType: "",
    buildingLocation: "",
    buildingArea: "",
    totalFloors: "",
    totalRestrooms: "",
    manager: "",
    contactNumber: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const buildingData = {
      ...generalInfo,
      image,
    };

    dispatch(addBuildingData(buildingData));
    console.log("Building data submitted:", buildingData);

    setLoading(false);
    handleNext();
  };

  if (activeStep === 0) {
    return (
      <div className="bg-white relative">
        {loading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
            <img src={loader} alt="loader" className="w-24 h-24" />
          </div>
        )}
        <p className="text-[#A449EB] text-[17px]">General Information</p>
        <div className="flex flex-col items-center justify-center w-full h-full mb-3 mt-4">
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col items-center justify-center w-full border-2 cursor-pointer bg-gray-50 relative ${
              image ? "h-[60vh]" : "h-64"
            }`}
          >
            <div className="flex flex-col items-center justify-center w-full h-full z-10">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  height={"100%"}
                />
              ) : (
                <>
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
                </>
              )}
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>

        <div className="relative w-full">
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <div className="">
                  <Input
                    label="Building Name"
                    type="text"
                    name="buildingName"
                    onChange={handleInputChange}
                    value={generalInfo.buildingName}
                    id="buildingName"
                    placeholder="Building Name"
                  />
                </div>
                <div>
                  <Dropdown
                    label="Label Type"
                    name="buildingType"
                    id="buildingType"
                    value={generalInfo.buildingType}
                    onChange={handleInputChange}
                    options={[
                      { option: "Commercial" },
                      { option: "Public" },
                      { option: "Private" },
                    ]}
                  >
                    {/* <option value="" disabled>
                      Select a type
                    </option>
                    <option value="commercial">Commercial</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option> */}
                  </Dropdown>
                </div>

                <div className="">
                  <Input
                    label="Location"
                    type="text"
                    name="buildingLocation"
                    onChange={handleInputChange}
                    value={generalInfo.buildingLocation}
                    id="location"
                    placeholder="Warehouse 01, United Kingdom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-5">
                <div className="">
                  <Input
                    label="Area"
                    type="number"
                    name="buildingArea"
                    onChange={handleInputChange}
                    value={generalInfo.buildingArea}
                    id="area"
                    placeholder="Sq ft"
                    min={0}
                  />
                </div>
                <div className="">
                  <Input
                    label="Total Floors"
                    type="number"
                    name="totalFloors"
                    onChange={handleInputChange}
                    value={generalInfo.totalFloors}
                    id="floors"
                    placeholder="10"
                    min={0}
                  />
                </div>
                <div className="">
                  <Input
                    label="Total Restrooms"
                    type="number"
                    name="totalRestrooms"
                    onChange={handleInputChange}
                    value={generalInfo.totalRestrooms}
                    id="restrooms"
                    placeholder="10"
                    min={0}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-5">
                <div className="">
                  <Input
                    label="Building Manager"
                    type="text"
                    name="manager"
                    onChange={handleInputChange}
                    value={generalInfo.manager}
                    id="manager"
                    placeholder="MKS"
                  />
                </div>
                <div className="">
                  <Input
                    label="Contact Number"
                    type="text"
                    name="contactNumber"
                    onChange={handleInputChange}
                    value={generalInfo.contactNumber}
                    id="contacts"
                    placeholder="9876543210"
                    min={0}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-end mt-4 gap-3">
              {/* <Button
                text="Previous"
                type="button"
                onClick={handlePrev}
                width="w-full md:w-[100px]"
                bg="bg:transparent text-[#A449EB] border-[1px] border-[#A449EB] hover:bg-[#A449EB] hover:text-white"
              /> */}

              <Button
                text="Next"
                disabled={loading}
                width="w-full md:w-[100px]"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
};

export default AddBuilding;
