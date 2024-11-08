// import { FaChevronDown, FaRegBell } from "react-icons/fa";
// import profilePic from "../../assets/images/header/profilePic.png";
// import { GoDotFill } from "react-icons/go";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { IoIosArrowForward, IoIosLogOut } from "react-icons/io";

// const Header = () => {
//   const [profileActive, setProfileActive] = useState(false);

//   const navigate = useNavigate();

//   // Access user data from Redux state

//   console.log("users", user);
//   const toggleDropDown = () => {
//     setProfileActive(!profileActive);
//   };

//   return (
//     <section
//       id="header_banner"
//       className="px-[25px] pt-[25px]  relative h-[15vh]"
//     >
//       <div className="flex justify-end  items-center gap-4">
//         <button className="bg-black h-[40px] w-[40px] flex justify-center items-center rounded-lg relative">
//           <FaRegBell color="white" />
//           <GoDotFill
//             color="#EB5757"
//             className="absolute right-[-4px] top-[-6px]"
//           />
//         </button>
//         <div className="flex items-center gap-2 md:gap-4">
//           <img
//             src={user?.profilePic || profilePic}
//             alt="profile-pic"
//             className="w-[40px] h-[40px] rounded-sm object-cover hidden md:inline-block"
//           />
//           <div className="flex flex-col items-center">
//             <p className="flex items-center gap-2 text-base text-[white] text-[16px] leading-[20.36px] font-[500]">
//               {user?.user?.fullName || "User"}
//               <FaChevronDown
//                 size={10}
//                 onClick={toggleDropDown}
//                 rotate={profileActive ? 180 : 90}
//                 style={{ cursor: "pointer" }}
//               />
//             </p>
//           </div>
//         </div>
//       </div>
//       {profileActive && (
//         <div className="absolute top-[70px] right-3 bg-white shadow-md rounded-lg w-[150px] z-10 border">
//           <Link
//             className="flex items-center justify-between px-3 py-2 border-b"
//             to={"/home/setting"}
//             onClick={() => setProfileActive(false)}
//           >
//             Profile
//             <IoIosArrowForward />
//           </Link>
//           <div
//             className="flex items-center justify-between px-3 py-2 cursor-pointer"
//             onClick={handleLogout}
//           >
//             Logout
//             <IoIosLogOut />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Header;
