import { useState } from "react";
import signinImage from "../assets/images/auth/login.svg";
import logo from "../assets/images/auth/logo.svg";
import blurImage from "../assets/images/auth/bluer.svg";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserProfile, SignIn } from "../service/authService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setProfile } from "../redux/reducers/authSlice";
import Input from "../components/shared/input/Input";
import Button from "../components/shared/button/Button";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signindata, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signindata, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SignIn(signindata);

      toast.success(response?.message);
      setSignInData({
        email: "",
        password: "",
      });

      const userProfile = await fetchUserProfile();
      if (userProfile) {
        dispatch(setProfile(userProfile));
      }

      console.log(navigate("/home"));
    } catch (error) {
      const errorMsg = error.message;
      toast.error(errorMsg);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
      <div className="order-1 md:order-1 md:col-span-7 p-6 flex flex-col top-[10%] min-h-screen relative">
        <div className="flex flex-col pt-8 lg:px-8">
          <div className="sm:mx-auto mb-5 sm:w-full sm:max-w-sm flex justify-center">
            <div className="logo text-xl font-bold">
              <img src={logo} alt="logo" className="w-auto h-12" />
            </div>
          </div>
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-1 text-center text-sm leading-6 text-gray-600">
            Login into your account
          </p>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-4">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleSignInChange}
                  value={signindata.email}
                  autoComplete="email"
                  required
                  placeholder="Email address"
                />
              </div>

              <div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleSignInChange}
                  value={signindata.password}
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                />
              </div>

              <div>
                <Button text="login" type="submit" width="w-full" />
              </div>

              <div>
                <p className="text-center text-lg text-gray-600">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="order-2 md:order-2 md:col-span-5 bg-[#FFDEDC] flex items-center justify-center relative">
        <img
          src={signinImage}
          alt="Registration Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 top-[20%] w-[75%] left-[5%]">
          <div
            className="text-white p-6 rounded-lg w-full"
            style={{
              background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${blurImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backdropFilter: "blur(10px)",
              border: "1px solid black",
            }}
          >
            <p className="text-lg font-medium">
              Real-time insights for real-time care. <br /> Sensors that track
              and enhance hygiene. <br /> Efficient management at your
              fingertips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
