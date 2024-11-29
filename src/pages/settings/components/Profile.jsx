/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import profileImage from "../../../assets/profile.svg";
import Modal from "../../../components/modals/Modal";
import Button from "../../../components/shared/button/Button";
import Input from "../../../components/shared/input/Input";
import Dropdown from "../../../components/shared/dropdown/Dropdown";

const Profile = () => {
  const [open, setOpen] = useState(false);

  // Static user profile data
  const [userProfile, setUserProfile] = useState({
    profileImage,
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "1234567890",
    dob: "1990-01-01",
    nationality: "American",
    gender: "Male",
  });

  const handleEdit = (updatedProfile) => {
    setUserProfile(updatedProfile);
    setOpen(false);
  };

  const { fullName, email, phoneNumber, dob, nationality, gender } =
    userProfile;

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
          />
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold">{fullName || "User Name"}</h3>
            <p className="text-[18px] py-2">{email || "User Email"}</p>
          </div>
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
            placeholder="Phone number"
            value={phoneNumber || ""}
          />
          <Input type="text" placeholder="Date of Birth" value={dob} readOnly />
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
        <Button
          text="edit"
          width="md:w-[120px] w-full"
          onClick={() => setOpen(true)}
        />
      </div>

      {open && (
        <Modal
          onClose={() => setOpen(false)}
          title="Edit Profile"
          width="w-[320px] md:w-[450px]"
        >
          <EditModal userProfile={userProfile} onEdit={handleEdit} />
        </Modal>
      )}
    </>
  );
};

export default Profile;

const EditModal = ({ userProfile, onEdit }) => {
  const [profilePic, setProfilePic] = useState(userProfile.profileImage);
  const [file, setFile] = useState(null);
  const [formState, setFormState] = useState(userProfile);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setProfilePic(previewUrl);
      setFile(selectedFile);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit({ ...formState, profileImage: profilePic });
  };

  const { fullName, phoneNumber, dob, nationality, gender } = formState;

  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      <div className="mx-auto">
        <img
          src={profilePic}
          alt="Profile"
          className="cursor-pointer w-24 h-24 object-cover rounded-full"
          onClick={() => document.getElementById("fileInput").click()}
        />
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          style={{ display: "none" }}
          accept="image/*"
        />
      </div>
      <Input
        type="text"
        placeholder="Enter full name"
        name="fullName"
        value={fullName}
        onChange={handleChange}
      />
      <Input
        type="number"
        placeholder="Enter phone number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
      />
      <Input type="date" name="dob" value={dob} onChange={handleChange} />
      <div className="grid grid-cols-1 gap-4 w-full">
        <Dropdown
          name="gender"
          value={gender}
          options={[
            { option: "Male", value: "Male" },
            { option: "Female", value: "Female" },
          ]}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Nationality"
          name="nationality"
          value={nationality}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4">
        <Button text="update" width="w-full" />
      </div>
    </form>
  );
};
