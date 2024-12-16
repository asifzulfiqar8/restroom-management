import Input from "../../../components/shared/input/Input";
import Button from "../../../components/shared/button/Button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useUpdateMyProfileMutation } from "../../../services/auth/authApi";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [oldPasswordType, setOldPasswordType] = useState("text");
  const [newPasswordType, setNewPasswordType] = useState("text");
  const [confirmPasswordType, setConfirmPasswordType] = useState("text");

<<<<<<< HEAD
  const [updateProfile, { isLoading }] = useUpdateMyProfileMutation();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePasswordHandler = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) return toast.error("New password and confirm password do not match.");
    const formData = new FormData();
    formData.append("oldPassword", oldPassword);
    formData.append("newPassword", newPassword);
    try {
      const res = await updateProfile(formData).unwrap();
      if (res?.success) toast.success(res?.message);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error?.data?.message || "Error occurred");
      console.log("Error in updateProfileHandler", error);
    }
=======
  const handleShowOldPassword = () => {
    setOldPasswordType(!oldPasswordType);
  };
  const handleShowNewPassword = () => {
    setNewPasswordType(!newPasswordType);
  };

  const handleShowConfirmPassword = () => {
    setConfirmPasswordType(!confirmPasswordType);
>>>>>>> bce25d01a1c5d68350df24a9f245162a7a1d0eca
  };

  return (
    <div className="parentContainer min-h-screen">
      <div className="piechart p-4 md:p-5">
        <h3 className="text-[24px] font-[500] mb-4 xl:mb-0">Change Password</h3>
<<<<<<< HEAD
        <form className="bg-white rounded-[15px] mt-4 p-5 gap-4 border-[2px]" onSubmit={changePasswordHandler}>
=======
        <form className="bg-white rounded-[15px] mt-4 p-5 gap-4 border-[2px]">
>>>>>>> bce25d01a1c5d68350df24a9f245162a7a1d0eca
          <div className="grid grid-cols-1 gap-3">
            <Input
              type={oldPasswordType ? "password" : "text"}
              label="Old Password"
<<<<<<< HEAD
              icon={oldPasswordType ? <FaRegEyeSlash /> : <FaRegEye />}
              onIconClick={() => setOldPasswordType(!oldPasswordType)}
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
=======
              icon={oldPasswordType ? <FaRegEye /> : <FaRegEyeSlash />}
              onIconClick={handleShowOldPassword}
              placeholder="Old Password"
>>>>>>> bce25d01a1c5d68350df24a9f245162a7a1d0eca
            />
            <Input
              type={newPasswordType ? "password" : "text"}
              label="New Password"
<<<<<<< HEAD
              icon={newPasswordType ? <FaRegEyeSlash /> : <FaRegEye />}
              onIconClick={() => setNewPasswordType(!newPasswordType)}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
=======
              icon={newPasswordType ? <FaRegEye /> : <FaRegEyeSlash />}
              onIconClick={handleShowNewPassword}
              placeholder="New Password"
>>>>>>> bce25d01a1c5d68350df24a9f245162a7a1d0eca
            />
            <Input
              type={confirmPasswordType ? "password" : "text"}
              label="Confirm New Password"
<<<<<<< HEAD
              icon={confirmPasswordType ? <FaRegEyeSlash /> : <FaRegEye />}
              onIconClick={() => setConfirmPasswordType(!confirmPasswordType)}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
=======
              icon={confirmPasswordType ? <FaRegEye /> : <FaRegEyeSlash />}
              onIconClick={handleShowConfirmPassword}
              placeholder="Confirm New Password"
>>>>>>> bce25d01a1c5d68350df24a9f245162a7a1d0eca
            />
          </div>
          <div className="mt-3">
            <Button disabled={isLoading} text="Change Password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
