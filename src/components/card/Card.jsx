/* eslint-disable react/prop-types */
import Image from "../../assets/card1.png";

const Card = ({ data }) => {
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
    <div className="bg-white border-[2px] border-black-500 rounded-xl shadow-lg overflow-hidden">
      <a href="#">
        <img
          className="w-full h-[200px] object-cover"
          src={data?.buildingImage || Image}
          alt="Building"
        />
      </a>
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="buildingDetails text-center sm:text-left">
            <p className="text-xs sm:text-base text-gray-700">
              {data?.buildingLocation}
            </p>
            <h2 className="text-xl mt-1 font-[500]">
              {data?.buildingname || "Building Name"}
            </h2>
          </div>
          <div className="cardButton text-center sm:text-right">
            <button
              className={`${getButtonColor(
                data?.buildingType
              )} text-white px-12 py-2 rounded text-xs sm:text-base capitalize`}
            >
              {data?.buildingType}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="box p-2 flex flex-col items-center">
            <p className="text-sm sm:text-xl font-semibold text-gray-900">
              {data?.totalFloors || "N/A"}
            </p>
            <p className="text-xs sm:text-sm">Number Of Floors</p>
          </div>
          <div className="box p-2 flex flex-col items-center">
            <p className="text-sm sm:text-xl font-semibold text-gray-900">
              {data?.totalRestrooms || "N/A"}
            </p>
            <p className="text-xs sm:text-sm">Number Of Restrooms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
