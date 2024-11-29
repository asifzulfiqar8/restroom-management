import Input from "../../../components/shared/input/Input";
import Button from "../../../components/shared/button/Button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const ChangePassword = () => {
  const [oldPasswordType, setOldPasswordType] = useState("text");
  const [newPasswordType, setNewPasswordType] = useState("text");
  const [confirmPasswordType, setConfirmPasswordType] = useState("text");

  const handleShowOldPassword = () => {
    setOldPasswordType(!oldPasswordType);
  };
  const handleShowNewPassword = () => {
    setNewPasswordType(!newPasswordType);
  };

  const handleShowConfirmPassword = () => {
    setConfirmPasswordType(!confirmPasswordType);
  };

  return (
    <div className="parentContainer min-h-screen">
      <div className="piechart p-4 md:p-5">
        <h3 className="text-[24px] font-[500] mb-4 xl:mb-0">Change Password</h3>
        <form className="bg-white rounded-[15px] mt-4 p-5 gap-4 border-[2px]">
          <div className="grid grid-cols-1 gap-3">
            <Input
              type={oldPasswordType ? "password" : "text"}
              label="Old Password"
              icon={oldPasswordType ? <FaRegEye /> : <FaRegEyeSlash />}
              onIconClick={handleShowOldPassword}
              placeholder="Old Password"
            />
            <Input
              type={newPasswordType ? "password" : "text"}
              label="New Password"
              icon={newPasswordType ? <FaRegEye /> : <FaRegEyeSlash />}
              onIconClick={handleShowNewPassword}
              placeholder="New Password"
            />
            <Input
              type={confirmPasswordType ? "password" : "text"}
              label="Confirm New Password"
              icon={confirmPasswordType ? <FaRegEye /> : <FaRegEyeSlash />}
              onIconClick={handleShowConfirmPassword}
              placeholder="Confirm New Password"
            />
          </div>
          <div className="mt-3">
            <Button text="Change Password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
