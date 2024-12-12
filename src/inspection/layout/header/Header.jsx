// ==============INSPECTION HEADER

import { FaChevronDown, FaRegBell } from "react-icons/fa";
import profilePic from "../../../assets/images/header/profilePic.png";
import { GoDotFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosLogOut } from "react-icons/io";
import Notifications from "./Notifications";

const Header = () => {
  const [profileActive, setProfileActive] = useState(false);

  const navigate = useNavigate();

  const [notificationActive, setNotificationActive] = useState(false);
  const notificationRef = useRef();

  const toggleDropDown = () => {
    setProfileActive(!profileActive);
  };

  const handleNotification = () => {
    setNotificationActive(!notificationActive);
    setProfileActive(false);
  };

  return (
    <section
      id="header_banner"
      className="px-[25px] pt-[25px]  relative h-[15vh]"
    >
      <div className="flex justify-end  items-center gap-4">
        <button
          className="bg-black h-[40px] w-[40px] flex justify-center items-center rounded-lg relative"
          onClick={handleNotification}
          ref={notificationRef}
        >
          <FaRegBell color="white" />
          <GoDotFill
            color="#EB5757"
            className="absolute right-[-4px] top-[-6px]"
          />
          {notificationActive && (
            <div className="absolute top-[45px] right-[-60px] sm:right-0 bg-white drop-shadow-md rounded-lg w-[280px] h-[300px] border z-[999999] overflow-y-auto no-scrollbar">
              <Notifications />
            </div>
          )}
        </button>
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src={profilePic}
            alt="profile-pic"
            className="w-[40px] h-[40px] rounded-sm object-cover hidden md:inline-block"
            onClick={toggleDropDown}
          />
          <div className="flex flex-col items-center">
            {/* <p className="flex items-center gap-2 text-base text-[white] text-[16px] leading-[20.36px] font-[500]">
            {user?.user?.fullName || 'User'}
            <FaChevronDown
              size={10}
              onClick={toggleDropDown}
              rotate={profileActive ? 180 : 90}
              style={{ cursor: "pointer" }}
            />
          </p> */}
          </div>
        </div>
      </div>
      {profileActive && (
        <div className="absolute top-[70px] right-3 bg-white shadow-md rounded-lg w-[150px] z-10 border">
          <Link
            className="flex items-center justify-between px-3 py-2 border-b"
            to={"/home/setting"}
            onClick={() => setProfileActive(false)}
          >
            Profile
            <IoIosArrowForward />
          </Link>
          <div className="flex items-center justify-between px-3 py-2 cursor-pointer">
            Logout
            <IoIosLogOut />
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
