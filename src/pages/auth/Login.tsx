import React, { useEffect } from "react";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { LoginInterface } from "../../utils/interfaces/user";
import { signIn } from "../../redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";

interface ResponLogin {
  token: string;
  message: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const auth = useSelector((state: RootState) => state.Auth);
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
    onSubmit: async (val: LoginInterface) => {
      await dispatch(signIn(val));
    },
  });

  useEffect(() => {
    if (formik.isSubmitting) {
      if (auth.statusLogin === "error") {
        toast.error(auth.errMessage, {
          duration: 1000,
        });
      }
      if (auth.statusLogin === "succes") {
        localStorage.setItem("token", (auth.data as ResponLogin)?.token);
        navigate("/dashboard");
        window.location.reload();
      }
    }
    console.log({ auth: auth });
  }, [auth.statusLogin]);

  return (
    <div className="bg-  ">
      <div className="bg-[#5A57FF] h-[150vh]  rounded-r-full flex lg:w-[500px]  items-center fixed   -top-36">
        <div className=" bg-white w-6/12 h-3/6 rounded-r-full">{""}</div>
      </div>
      <div className="absolute right-64 top-36 ">
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
            <Link to="/register">
              <a href="" className="text-[#5A57FF]">
                Register
              </a>
            </Link>
          </small>
        </form>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Login;
