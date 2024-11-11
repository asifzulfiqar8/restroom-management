import React from "react";

const Input = ({ type, label, ...rest }) => {
  return (
    <div>
      {label && (
        <label className="block text-[#111111] text-sm mb-2 font-[600]">
          {label}
        </label>
      )} 
      <input
        className={` ${
          type === "color"
            ? "w-[30px] h-[35px] border-[0px] shadow-none "
            : "placeholder:text-gray-400 shadow-sm border-[1px] border-[#54545499] rounded-[10px] w-full px-[20px] py-[12px] text-[#414141] leading-tight focus:outline-none focus:shadow-outline"
        } `}
        autoCorrect={false}
        autoCapitalize={false}
        {...rest}
      />
    </div>
  );
};

export default Input;
