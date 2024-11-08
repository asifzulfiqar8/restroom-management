/* eslint-disable react/prop-types */
import purpleRestroom from "../../../../assets/dashboard/subComponent/purpleRestroom.svg";
import yellowToilet from "../../../../assets/dashboard/subComponent/yellowToilet.svg";
import blueRestroom from "../../../../assets/dashboard/subComponent/blueRestroom.svg";
import redSensor from "../../../../assets/dashboard/subComponent/redSensor.svg";
import { Link, useParams } from "react-router-dom";

const AllFloors = ({ data }) => {
  const id = useParams().id;
  return (
    <div className="">
      <div>
        <div className="piechart p-5">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-12 xl:col-span-2">
              <img
                src={data?.floorRoomImage}
                className="object-cover"
                height={"100px"}
                width={"100px"}
                alt="Floor"
              />
            </div>
            <div className=" col-span-12 md:col-span-12 xl:col-span-8">
              <p className="text-[#414141] text-lg leading-[19.1px] font-semibold">
                Building Name
              </p>
              <div className="grid grid-cols-12 mt-9 gap-3  ">
                <div className="col-span-12 md:col-span-12 xl:col-span-3  ">
                  <div className="flex items-center gap-3">
                    <img src={purpleRestroom} className="h-[26px] w-[30px]" />
                    <div>
                      <p className="font-[700] text-[16px] leading-[21.82px] text-[#292D32]">
                        Total rooms
                      </p>
                      <p className="font-[500] text-[16px] leading-[21.82px] text-[#00000080]">
                        12
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 xl:col-span-3  ">
                  <div className="flex items-center gap-3">
                    <img src={yellowToilet} className="h-[26px] w-[30px]" />
                    <div>
                      <p className="font-[700] text-[16px] leading-[21.82px] text-[#292D32]">
                        Occupied Restroom
                      </p>
                      <p className="font-[500] text-[16px] leading-[21.82px] text-[#00000080]">
                        s
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 xl:col-span-3  ">
                  <div className="flex items-center gap-3">
                    <img src={blueRestroom} className="h-[26px] w-[30px]" />
                    <div>
                      <p className="font-[700] text-[16px] leading-[21.82px] text-[#292D32]">
                        Free Restroom
                      </p>
                      <p className="font-[500] text-[16px] leading-[21.82px] text-[#00000080]">
                        f
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 xl:col-span-3  ">
                  <div className="flex items-center gap-3">
                    <img src={redSensor} className="h-[26px] w-[30px]" />
                    <div>
                      <p className="font-[700] text-[16px] leading-[21.82px] text-[#292D32]">
                        Active Sensors
                      </p>
                      <p className="font-[500] text-[16px] leading-[21.82px] text-[#00000080]">
                        a
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-2 flex justify-center items-center">
              <Link
                // to={`/home/floor/${id}/${data?._id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <button className="text-[#A449EB] text-[16px] w-fit leading-[21px] font-bold underline bg-[#EED8FF] p-3 rounded-[10px]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
          <hr className="my-[10px]" />
        </div>
      </div>
    </div>
  );
};

export default AllFloors;
