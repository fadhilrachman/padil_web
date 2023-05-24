import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/reducers";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterInterface } from "../../utils/interfaces/user";
import { signUp } from "../../redux/AuthSlice";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.Auth);
  const initialValues: RegisterInterface = {
    nama: "",
    email: "",
    confirm_password: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      nama: Yup.string().required("username tidak boleh kosong"),
      email: Yup.string().required("email tidak boleh kosong"),
      password: Yup.string()
        .required("password tidak boleh kosong")
        .min(6, "password minimal 6 karakter"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "password error")
        .required("confirm passworda tidak boleh kosong"),
    }),
    onSubmit: async (val: RegisterInterface) => {
      await dispatch(signUp(val));
      console.log(auth.statusRegister);
    },
  });

  useEffect(() => {
    if (formik.isSubmitting) {
      if (auth.statusRegister === "error") {
        toast.error(auth.errMessage, {
          duration: 1000,
        });
      }
      if (auth.statusRegister === "succes") {
        navigate("/login");
      }
    }
  }, [auth.statusRegister]);
  return (
    <div className="h-screen   ">
      <div className="bg-[#5A57FF] h-[150vh]  rounded-r-full flex lg:w-[500px]items-center fixed   -top-36">
        <div className=" bg-white w-6/12 h-3/6 rounded-r-full">{""}</div>
      </div>
      <div className="absolute right-64 top-36">
        <h1 className="text-[#5A57FF] text-7xl text-center font-bold">
          Register
        </h1>
        <form
          action=""
          className="flex flex-col mt-10 "
          onSubmit={formik.handleSubmit}
        >
          <BaseInput
            placeholder="username"
            name="nama"
            value={formik.values.nama}
            onChange={formik.handleChange}
            errMessage={formik.errors.nama}
          />
          <BaseInput
            className="mt-5"
            placeholder="gmail"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errMessage={formik.errors.email}
          />
          <BaseInput
            className="mt-5"
            placeholder="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errMessage={formik.errors.password}
          />
          <BaseInput
            className="mt-5"
            placeholder="confirm password"
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            errMessage={formik.errors.confirm_password}
          />

          <BaseButton className="mt-7" type="submit">
            Register
          </BaseButton>
          <small>
            already have an account?{" "}
            <Link to="/login">
              <a href="" className="text-[#5A57FF]">
                Login
              </a>
            </Link>
          </small>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Register;
