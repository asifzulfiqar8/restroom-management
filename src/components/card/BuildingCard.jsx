/* eslint-disable react/prop-types */
import Image from "../../assets/card1.png";
import Button from "../shared/button/Button";

const BuildingCard = ({ data, buildingType = "public" }) => {
  // const {
  // buildingLocation = "Technology Park"
  // buildingName = "Arfa Heights"
  // buildingType = "public",
  // totalFloors = 4,
  // totalRestrooms = 16,
  // } = data;
  // Determine the button color based on the building type
  const getButtonColor = (type) => {
    switch (type?.toLowerCase()) {
      case "public":
        return "bg-green-500";
      case "private":
        return "bg-red-500";
      case "commercial":
        return "bg-yellow-800";
      default:
        return "bg-blue-500"; // Default color if type is not recognized
    }
  };

  return (
    <div className="bg-[#F7F7F7] rounded-xl overflow-hidden">
      <img
        className="w-full h-[200px] object-cover"
        src={Image}
        alt="Building"
      />
      <div className="p-4 md:p-6">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> */}
        <div className="flex justify-between w-full items-center ">
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-base text-gray-700">Location</p>
            <h2 className="text-xl mt-1 font-[500]">Building Name</h2>
          </div>

          <div
            className={`${
              buildingType == "public"
                ? "bg-secondary"
                : buildingType === "private"
                ? "bg-red-500"
                : buildingType === "commercial"
                ? "bg-yellow-800"
                : ""
            }  w-fit px-4 py-2 capitalize text-white text-sm font-bold rounded-md`}
          >
            {buildingType}
          </div>
        </div>
        {/* </div> */}

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="box p-2 flex flex-col items-center bg-[#E8E2FF] rounded-md">
            <p className="text-sm sm:text-xl font-semibold text-gray-900 text-primary">
              4
            </p>
            <p className="text-xs sm:text-sm">Number Of Floors</p>
          </div>
          <div className="box p-2 flex flex-col items-center bg-[#E8E2FF] rounded-md">
            <p className="text-sm sm:text-xl font-semibold text-gray-900 text-primary">
              14
            </p>
            <p className="text-xs sm:text-sm">Number Of Restrooms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingCard;
