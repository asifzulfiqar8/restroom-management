// /* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import buildingImage from "../../../assets/building.jpg";
// import moment from "moment/moment";
// import { useSelector } from "react-redux";

// const Mapping = ({ activeStep, handleNext, handlePrev }) => {
//   const [position, setPosition] = useState([51.505, -0.09]);
//   const [latitude, setLatitude] = useState(51.505);
//   const [longitude, setLongitude] = useState(-0.09);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setPosition([latitude, longitude]);
//           setLatitude(latitude);
//           setLongitude(longitude);
//         },
//         (error) => {
//           console.error("Error fetching user's location: ", error);
//         }
//       );
//     }
//   }, []);

//   // Update position when latitude or longitude changes
//   useEffect(() => {
//     setPosition([latitude, longitude]);
//   }, [latitude, longitude]);

//   const RecenterMap = ({ latitude, longitude }) => {
//     const map = useMap();
//     useEffect(() => {
//       map.flyTo([latitude, longitude], map.getZoom(), {
//         animate: true,
//         duration: 1.5,
//       });
//     }, [map, latitude, longitude]);

//     return null;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const data = { latitude, longitude };

//       await buildingLocation({ data, id: buildingData?.building?._id }).unwrap();

//       handleNext();
//     } catch (error) {
//       console.error('Failed to add building location:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="text-left">
//         <p className="text-[#A449EB] -2 text-[17px]">Building Model</p>
//       </div>
//       <MapContainer
//         center={position}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{
//           height: "70vh",
//           width: "100%",
//           borderRadius: "10px",
//           border: "1px solid black",
//           marginTop: "30px",
//         }}
//         className="grayscale-map"
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker position={position}>
//           <Popup>
//             <div className="h-full w-full">
//               <img
//                 className="h-64 w-full object-cover rounded"
//                 src={buildingImage}
//                 alt="Building Image"
//               />
//               <div className="p-2">
//                 <h3 className="text-sm font-semibold text-gray-700">
//                   Building Name:{" "}
//                   <span className="font-medium">Tetra Technology</span>
//                 </h3>
//                 <h3 className="text-sm font-semibold text-gray-700">
//                   Owner Name:{" "}
//                   <span className="font-medium">Dilawar Khan</span>
//                 </h3>
//                 <p className="text-sm font-semibold text-black">
//                   Total Area: <span className="font-medium">200 sqft</span>
//                 </p>
//                 <p className="text-sm font-semibold text-black">
//                   No. Of Floors: <span className="font-medium">134</span>
//                 </p>
//                 <p className="text-sm font-semibold text-black">
//                   Construction Year:{" "}
//                   <span className="font-medium">
//                     {moment(Date.now()).format("YYYY") || "N/A"}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </Popup>
//         </Marker>
//         <RecenterMap latitude={latitude} longitude={longitude} />
//       </MapContainer>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
//           <div>
//             <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">
//               Latitude
//             </label>
//             <input
//               id="latitude"
//               className="shadow-sm sm:text-sm rounded-md w-full p-2.5 outline-none bg-[#FFFFFF] border-[1px] border-[#00000040] text-[#111111]"
//               type="number"
//               name="latitude"
//               value={latitude}
//               onChange={(e) => setLatitude(parseFloat(e.target.value))}
//             />
//           </div>
//           <div>
//             <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">
//               Longitude
//             </label>
//             <input
//               id="longitude"
//               className="shadow-sm sm:text-sm rounded-md w-full p-2.5 outline-none bg-[#FFFFFF] border-[1px] border-[#00000040] text-[#111111]"
//               type="number"
//               name="longitude"
//               value={longitude}
//               onChange={(e) => setLongitude(parseFloat(e.target.value))}
//             />
//           </div>
//         </div>
//         <div className="mt-3 border-gray-200 rounded-b">
//           <div className="flex justify-end gap-2 flex-col sm:flex-row">
//             <button
//               onClick={handlePrev}
//               disabled={activeStep === 0}
//               className="border-[#039099] border-[2px] font-semibold  text-[17px] rounded-[5px] w-full p-3  ml-3 max-w-[200px]"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={activeStep === 3}
//               className="text-[#FFFFFF] font-semibold  text-[17px] rounded-[5px] w-full p-3 outline-none  ml-3 max-w-[200px]"
//               style={{
//                 background: '#039099',
//               }}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Mapping;

/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import buildingImage from "../../../assets/building.jpg";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { addBuildingData } from "../../../redux/reducers/buildingSlice";
import Button from "../../../components/shared/button/Button";
const Mapping = ({ activeStep, handleNext, handlePrev }) => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState([51.505, -0.09]);
  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);

  // Assuming you have access to buildingData from Redux or props
  const buildingData = useSelector((state) => state.buildings.data);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error fetching user's location: ", error);
        }
      );
    }
  }, []);

  // Update position when latitude or longitude changes
  useEffect(() => {
    setPosition([latitude, longitude]);
  }, [latitude, longitude]);

  const RecenterMap = ({ latitude, longitude }) => {
    const map = useMap();
    useEffect(() => {
      map.flyTo([latitude, longitude], map.getZoom(), {
        animate: true,
        duration: 1.5,
      });
    }, [map, latitude, longitude]);

    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = { latitude, longitude };

      // Log the whole data object to the console
      console.log("Building Data:", {
        id: buildingData?.building?._id,
        latitude,
        longitude,
      });

      // Dispatch the action to add building data to Redux
      dispatch(
        addBuildingData({
          id: buildingData?.building?._id,
          latitude,
          longitude,
        })
      );

      handleNext();
    } catch (error) {
      console.error("Failed to add building location:", error);
    }
  };

  return (
    <div>
      <div className="text-left">
        <p className="text-[#A449EB] -2 text-[17px]">Building Model</p>
      </div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "70vh",
          width: "100%",
          borderRadius: "10px",
          border: "1px solid black",
          marginTop: "30px",
        }}
        className="grayscale-map"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            <div className="h-full w-full">
              <img
                className="h-64 w-full object-cover rounded"
                src={buildingImage}
                alt="Building Image"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-700">
                  Building Name:{" "}
                  <span className="font-medium">Tetra Technology</span>
                </h3>
                <h3 className="text-sm font-semibold text-gray-700">
                  Owner Name: <span className="font-medium">Dilawar Khan</span>
                </h3>
                <p className="text-sm font-semibold text-black">
                  Total Area: <span className="font-medium">200 sqft</span>
                </p>
                <p className="text-sm font-semibold text-black">
                  No. Of Floors: <span className="font-medium">134</span>
                </p>
                <p className="text-sm font-semibold text-black">
                  Construction Year:{" "}
                  <span className="font-medium">
                    {moment(Date.now()).format("YYYY") || "N/A"}
                  </span>
                </p>
              </div>
            </div>
          </Popup>
        </Marker>
        <RecenterMap latitude={latitude} longitude={longitude} />
      </MapContainer>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div>
            <label
              htmlFor="latitude"
              className="block text-sm font-medium text-gray-700"
            >
              Latitude
            </label>
            <input
              id="latitude"
              className="shadow-sm sm:text-sm rounded-md w-full p-2.5 outline-none bg-[#FFFFFF] border-[1px] border-[#00000040] text-[#111111]"
              type="number"
              name="latitude"
              value={latitude}
              onChange={(e) => setLatitude(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label
              htmlFor="longitude"
              className="block text-sm font-medium text-gray-700"
            >
              Longitude
            </label>
            <input
              id="longitude"
              className="shadow-sm sm:text-sm rounded-md w-full p-2.5 outline-none bg-[#FFFFFF] border-[1px] border-[#00000040] text-[#111111]"
              type="number"
              name="longitude"
              value={longitude}
              onChange={(e) => setLongitude(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="mt-3 border-gray-200 rounded-b">
          {/* <div className="flex justify-end gap-2 flex-col sm:flex-row">
            <button
              onClick={handlePrev}
              disabled={activeStep === 0}
              className="border-[#039099] border-[2px] font-semibold text-[17px] rounded-[5px] w-full p-3 ml-3 max-w-[200px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={activeStep === 3}
              className="text-[#FFFFFF] font-semibold text-[17px] rounded-[5px] w-full p-3 outline-none ml-3 max-w-[200px]"
              style={{
                background: "#039099",
              }}
            >
              Next
            </button>
          </div> */}
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
              disabled={activeStep === 3}
              width="w-full md:w-[100px]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Mapping;
