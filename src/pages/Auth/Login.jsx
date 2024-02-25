import React, { useEffect, useState } from "react";
import bgAuth from "../../assets/images/Signup.jpg";
import DarkBg from "../../components/DarkBg";
import Logo from "../../assets/images/logoWT.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});

  const HandleInput = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // manipulate formdata we handled above if proccessed redirect to '/' for better auth use context or state management to check already login then navigate based on results
    navigate("/");
  };


  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <DarkBg background={bgAuth}>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <img src={Logo} />
            <span className="text-3xl pt-4 font-medium text-white">
                Login to Your Acccount
            </span>
          </div>
          <form className="flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:items-start p-6 items-center space-y-12 [&>div>input:focus]:ring-2 [&>div>input]:ring-orange-300">
            <div className="">
              <label className="text-white text-lg capitalize">E-mail Address</label>
              <input
                type="email"
                name="email"
                onChange={HandleInput}
                className="appearance-none w-[20vw] focus:outline-none rounded-md cursor-text p-3 bg-[#ffffff71] text-white"
              />
            </div>
            <div className="">
              <label className="text-white text-lg capitalize">password</label>
              <input
                type="password"
                name="password"
                onChange={HandleInput}
                className="appearance-none w-[20vw] focus:outline-none rounded-md cursor-text p-3 bg-[#ffffff71] text-white"
              />
            </div>

            <button
              type="submit"
              className="bg-[#f58820] border hover:border-[#f58820] text-white px-10 py-2 hover:bg-opacity-75 rounded-full"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="text-lg text-white">Not a member? <Link className="text-blue-400" to={'/auth/sign-up'}>Sign Up Here</Link></p>
          </form>
        </div>
      </div>
    </DarkBg>
  );
};

export default Login;
