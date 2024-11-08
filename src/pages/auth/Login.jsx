import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import triangle from "../../assets/images/auth/triangle.svg";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => { setShowPassword(!showPassword) };



  return (
    <>
      <section
        id="auth_banner"
        className="flex items-center justify-start min-h-screen bg-gray-100"
      >
        <Link to={"/"}>
          <div className="button">
            <button
              type="button"
              className="buttonColor"
              style={{ color: "white" }}
            >
              Join now
            </button>
          </div>
        </Link>

        <div className="flex items-start w-full p-8 mx-6 md:mx-10">
          <div className="w-full max-w-lg">
            <div className="flex items-center gap-2 ml-[-3rem] md:ml-[-4rem] mb-4">
              <img src={triangle} alt="" className="w-7 md:w-auto" />
              <h2 className="text-3xl text-gray-800 font-semibold textColor">
                Login
              </h2>
            </div>
            <form className="space-y-6">
              <div className="relative">
                <label className="text-gray-800 mb-1 block" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 bg-[#FFFFFF] border-[1px] border-[#00000040]"
                />
              </div>
              <div className="relative">
                <label className="text-gray-800 mb-1 block" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 bg-[#FFFFFF] border-[1px] border-[#00000040]"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer mt-8"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-600" />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-start sm:justify-end">
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
                  Login
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-800 text-sm">
                  By clicking on Signup, you agree to our Terms of <br />{" "}
                  Service and Privacy Policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
