import { useEffect, useState } from "react";
import profileImage from "../../../../assets/profile.svg";
// import { useCreateUserProfileMutation, useGetUserProfileQuery, useGetUserQuery } from "../../../redux/api/userApi";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import moment from "moment";
import { toast } from "react-toastify";
import Button from "../../../../components/shared/button/Button";
import Input from "../../../../components/shared/input/Input";
import Modal from "../../../../components/modals/Modal";
import Dropdown from "../../../../components/shared/dropdown/Dropdown";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [profilePic, setProfilePic] = useState("");
  const [file, setFile] = useState(null);

  const {
    profileImage,
    fullName,
    email,
    phoneNumber,
    dob,
    nationality,
    gender,
  } = userProfile || {};

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setProfilePic(previewUrl);
      setFile(selectedFile);
    }
  };

  return (
    <>
      <div
        className="bg-white flex items-center justify-between flex-col lg:flex-row rounded-[15px] mt-4 p-4 border-[1px] border-[#00000025]"
        style={{
          boxShadow:
            "-1px 1px 2px rgba(0, 0, 0, 0.1), 2px 1px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 w-full">
          <img
            src={profileImage}
            alt="Profile"
            className="cursor-pointer w-24 h-24 object-cover rounded-full"
            // onClick={() => document.getElementById("fileInput").click()}
          />
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold">{fullName || "User Name"}</h3>
            <p className="text-[18px] py-2">{email || "User Email"}</p>
          </div>
        </div>
      </div>

      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="image/*"
      />

      <div
        className="bg-white flex justify-between flex-col lg:flex-row items-start rounded-[15px] mt-4 p-4 gap-4 border-[1px] border-[#00000025]"
        style={{
          boxShadow:
            "-1px 1px 2px rgba(0, 0, 0, 0.1), 2px 1px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="grid grid-cols-1 gap-4 w-full">
          <Input
            type="text"
            readOnly
            placeholder="Phone number"
            value={phoneNumber || ""}
          />
          <Input
            type="text"
            placeholder="Date of Birth"
            name="dob"
            value={dob ? moment(dob).format("YYYY-MM-DD") : ""}
            readOnly
          />
        </div>
      </div>

      <div
        className="bg-white flex justify-between flex-col lg:flex-row items-start rounded-[15px] mt-4 p-4 gap-4 border-[1px] border-[#00000025]"
        style={{
          boxShadow:
            "-1px 1px 2px rgba(0, 0, 0, 0.1), 2px 1px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="grid grid-cols-1 gap-4 w-full">
          <Input
            type="text"
            readOnly
            placeholder="Nationality"
            value={nationality || ""}
          />
          <Input
            type="text"
            readOnly
            placeholder="Gender"
            value={gender || ""}
          />
        </div>
      </div>

      <div className="flex justify-center lg:justify-end w-full mt-5">
        <Button text="edit" onClick={() => setOpen(true)} />
      </div>
      {open && (
        <Modal
          onClose={() => setOpen(false)}
          title="Edit Profile"
          width="w-[320px] md:w-[450px]"
        >
          <EditModal />
        </Modal>
      )}
    </>
  );
};

export default Profile;

const EditModal = () => {
  const [userProfile, setUserProfile] = useState({});
  const [profilePic, setProfilePic] = useState("");
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);

  const getUserProfile = async () => {
    try {
      const profileData = await fetchUserProfile();
      if (profileData) {
        setUserProfile(profileData);
        if (profileData.profilePic) {
          setProfilePic(profileData.profilePic);
        }
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      toast.error("Failed to load user profile.");
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);
  const {
    profileImage,
    fullName,
    email,
    phoneNumber,
    dob,
    nationality,
    gender,
  } = userProfile || {};
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    if (file) {
      formData.append("profilePic", file);
    }

    formData.append("phoneNumber", phoneNumber);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("nationality", nationality);

    try {
      const updatedProfile = await editUserProfile(formData);
      if (updatedProfile) {
        toast.success("Profile updated successfully!");
        setUserProfile(updatedProfile);
        getUserProfile();
        setOpen(false);
      } else {
        throw new Error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
      toast.error("Failed to update user profile.");
    }
  };
  return (
    <div>
      <div className="sm:flex sm:items-start">
        <div className="w-full">
          <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
            <div className="mx-auto">
              <img
                src={profileImage}
                alt="Profile"
                className="cursor-pointer w-24 h-24 object-cover  rounded-full"
                onClick={() => document.getElementById("fileInput").click()}
              />
            </div>
            <Input
              type="number"
              placeholder="Enter phone number"
              name="phoneNumber"
              defaultValue={phoneNumber || ""}
            />
            <Input
              type="date"
              name="dob"
              defaultValue={dob ? moment(dob).format("YYYY-MM-DD") : ""}
            />
            <div className="grid grid-cols-1 gap-4 w-full">
              <Dropdown
                name="gender"
                defaultValue={gender || ""}
                options={[{ option: "male" }, { option: "Female" }]}
              />

              <Input
                type="text"
                placeholder="Nationality"
                name="nationality"
                defaultValue={nationality || ""}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mt-4">
        <Button text="update" width="w-full" />
      </div>
    </div>
  );
};
