/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiUpload } from "react-icons/fi"; // Example icon

const Input = ({ type, label, icon, onIconClick, ...rest }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="relative w-full">
      {/* Label */}
<<<<<<< HEAD
      {label && <label className="block text-[#11111199] text-sm mb-2">{label}</label>}
=======
      {label && (
        <label className="block text-[#11111199] text-sm mb-2">{label}</label>
      )}
>>>>>>> bce25d01a1c5d68350df24a9f245162a7a1d0eca

      {/* Input Wrapper */}
      <div className="relative w-full">
        {/* Input Field */}
        <input
          className={`${
            type === "file"
              ? "opacity-0 absolute inset-0 w-full h-full cursor-pointer"
              : type === "color"
              ? "w-[30px] h-[35px] border-[0px] shadow-none"
              : "shadow-sm border-[1px] border-[#54545499] rounded-[6px] w-full px-[20px] py-[12px] text-[#414141] leading-tight focus:outline-none focus:shadow-outline pr-[2.5rem]"
<<<<<<< HEAD
          } ${disabled ? "pointer-events-none opacity-50" : ""}`}
=======
          }`}
>>>>>>> bce25d01a1c5d68350df24a9f245162a7a1d0eca
          type={type}
          onChange={type === "file" ? handleFileChange : undefined}
          {...rest}
        />

        {/* For File Input Type */}
        {type === "file" && (
          <div className="pointer-events-none text-sm border-[1px] border-[#54545499] rounded-[6px] w-full px-[20px] py-[12px] text-[#414141] flex items-center">
            {fileName || (
              <>
<<<<<<< HEAD
                Smart Building <span className="text-[#aaa] mx-2">OR</span> Drop Logo
=======
                Smart Building <span className="text-[#aaa] mx-2">OR</span> Drop
                Logo
>>>>>>> bce25d01a1c5d68350df24a9f245162a7a1d0eca
              </>
            )}
          </div>
        )}

        {icon && (
          <div
            className="absolute inset-y-0 right-4 flex items-center text-[#414141] cursor-pointer"
            onClick={onIconClick}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
