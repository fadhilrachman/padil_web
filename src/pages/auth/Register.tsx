import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";

const Register = () => {
  return (
    <div className="h-screen   ">
      <div className="bg-[#5A57FF] h-[150vh]  rounded-r-full flex lg:w-[500px]items-center fixed   -top-36">
        <div className=" bg-white w-6/12 h-3/6 rounded-r-full">{""}</div>
      </div>
      <div className="absolute right-64 top-36">
        <h1 className="text-[#5A57FF] text-7xl text-center font-bold">
          Register
        </h1>
        <div className="flex flex-col mt-10 ">
          <BaseInput placeholder="username" />
          <BaseInput className="mt-5" placeholder="gmail" />
          <BaseInput className="mt-5" placeholder="password" type="password" />
          <BaseInput
            className="mt-5"
            placeholder="confirm password"
            type="password"
          />
          <small>
            already have an account?{" "}
            <Link to="/login">
              <a href="" className="text-[#5A57FF]">
                Login
              </a>
            </Link>
          </small>

          <BaseButton className="mt-7">Register</BaseButton>
        </div>
      </div>
    </div>
  );
};

export default Register;
