import Aside from "./Aside";
import Input from "../../../components/shared/input/Input";
import Button from "../../../components/shared/button/Button";

const ChangePassword = () => {
  return (
    <div className="parentContainer min-h-screen">
      <div className="piechart p-4 md:p-5">
        <h3 className="text-[24px] font-[500] mb-4 xl:mb-0">Change Password</h3>
        <form
          className="bg-white rounded-[15px] mt-4 p-4 gap-4"
          style={{
            boxShadow:
              "-1px 1px 2px rgba(0, 0, 0, 0.1), 2px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="grid grid-cols-1 gap-3 ">
            <Input placeholder="Old Password" type="password" />
            <Input placeholder="New Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
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
