import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import triangle from "../../assets/images/auth/triangle.svg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //handle form logic

  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const navigate = useNavigate();

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = signUpData;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log("SignUp Form submitted", signUpData);
  };

  return (
    <section
      id="auth_banner"
      className="flex items-center justify-start min-h-screen bg-gray-100"
    >
      <Link to={"/login"}>
        <div className="button">
          <button type="button">Login</button>
        </div>
      </Link>

      <div className="flex items-start w-full p-8 mx-4">
        <div className="w-full max-w-lg">
          <div className="flex items-center gap-2 ml-[-2rem] md:ml-[-2rem] mb-4">
            <img src={triangle} alt="" className="w-12 md:w-auto" />
            <h2 className="text-3xl text-gray-800 font-semibold textColor">
              Signup
            </h2>
          </div>
          <form className=" sm:space-y-6 ml-[2rem]" onSubmit={handleSubmit}>
            <div>
              <label
                className="text-gray-800 block mt-1 sm:mt-2 mb-1 sm:mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                value={signUpData.fullName}
                onChange={handleSignUpChange}
                type="text"
                className="w-full px-4 py-3 bg-[#FFFFFF] border-[1px] border-[#00000040]"
              />
            </div>
            <div className="relative">
              <label
                className="text-gray-800 block mt-1 sm:mt-2 mb-1 sm:mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                onChange={handleSignUpChange}
                value={signUpData.email}
                name="email"
                type="email"
                className="w-full px-4 py-3 bg-[#FFFFFF] border-[1px] border-[#00000040]"
              />
            </div>
            <div className="relative">
              <label
                className="text-gray-800 block mt-1 sm:mt-2 mb-1 sm:mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleSignUpChange}
                value={signUpData.password}
                className="w-full px-4 py-3 bg-[#FFFFFF] border-[1px] border-[#00000040]"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer mt-6 sm:mt-8"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-600" />
                ) : (
                  <FaEye className="text-gray-600" />
                )}
              </div>
            </div>
            <div className="relative">
              <label
                className="text-gray-800 block mt-1 sm:mt-2 mb-1 sm:mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleSignUpChange}
                value={signUpData.confirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-4 py-3 bg-[#FFFFFF] border-[1px] border-[#00000040]"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer mt-6 sm:mt-8"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="text-gray-600" />
                ) : (
                  <FaEye className="text-gray-600" />
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="/forgotPassword"
                  className="text-purple-600 hover:underline font-semibold"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-4 text-sm tracking-wide text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                Signup
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-800 text-sm">
                By clicking on Signup, you agree to our Terms of <br /> Service
                and Privacy Policy
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
