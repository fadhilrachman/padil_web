import React from "react";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { LoginInterface } from "../../utils/interfaces/user";
const Login = () => {
  const initialValues: LoginInterface = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().required("email tidak boleh kosong"),
      password: Yup.string()
        .required("password tidak boleh kosong")
        .min(6, "password minimal 6 karakter"),
    }),
    onSubmit: (val: LoginInterface) => {
      alert(val);
    },
  });
  console.log(formik.values);

  return (
    <div className="h-screen   ">
      <div className="bg-[#5A57FF] h-[150vh]  rounded-r-full flex lg:w-[500px]  items-center fixed   -top-36">
        <div className=" bg-white w-6/12 h-3/6 rounded-r-full">{""}</div>
      </div>
      <div className="absolute right-64 top-36">
        <h1 className="text-[#5A57FF] text-7xl font-bold text-center ">
          Login
        </h1>
        <form
          className="flex flex-col mt-10 "
          action=""
          onSubmit={formik.handleSubmit}
        >
          <BaseInput
            placeholder="gmail"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            errMessage={formik.errors.email}
          />
          <BaseInput
            className="mt-5"
            placeholder="password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            errMessage={formik.errors.password}
          />

          <BaseButton className="mt-7">Login</BaseButton>
          <small>
            Don't have account yet?{" "}
            <Link to="/login">
              <a href="" className="text-[#5A57FF]">
                Register
              </a>
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
