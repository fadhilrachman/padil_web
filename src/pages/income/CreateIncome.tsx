import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";
import TextArea from "../../components/form/TextArea";
import IncomeInterface from "../../utils/interfaces/income";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/reducers";
import * as Yup from "yup";
import { createDataIncome } from "../../redux/IncomeSlice";
import toast, { Toaster } from "react-hot-toast";

const CreateIncome = () => {
  const date = new Date();
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const formattedDate = date.toISOString().split("T")[0];
  const initialValues: IncomeInterface = {
    deskripsi: "",
    tanggal: formattedDate,
    total_pemasukan: 0,
  };
  const formik = useFormik({
    initialValues,
    validate: (val) => {
      const errors: any = {};
      if (val.total_pemasukan === 0 || !val.total_pemasukan) {
        errors.total_pemasukan = "total pemasukan tidak boleh kosong";
      }
      return errors;
    },
    onSubmit: async (val, { resetForm }) => {
      await dispatch(createDataIncome(val));
      resetForm();
      toast.success(" berhasil membuat data");
    },
    validationSchema: Yup.object({
      total_pemasukan: Yup.number(),
      deskripsi: Yup.string().required("deskripsi tidak boleh kosong"),
      tanggal: Yup.date().required("tanggal tidak boleh kosong"),
    }),
  });
  console.log(formik.values);
  console.log(formik.errors);

  return (
    <div>
      <h3 className="font-bold text-xl">Create Income</h3>
      <form
        action=""
        className="mt-5 bg-white shadow rounded p-10"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label htmlFor="">Tanggal</label>
          <br />
          <BaseInput
            placeholder="gmail"
            type="date"
            className="mt-2 w-full"
            name="tanggal"
            onChange={formik.handleChange}
            value={formik.values.tanggal}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Income Total</label>
          <br />
          <BaseInput
            className="w-full mt-2 "
            type="number"
            name="total_pemasukan"
            onChange={formik.handleChange}
            value={formik.values.total_pemasukan}
            errMessage={formik.errors?.total_pemasukan}
            placeholder="12000"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Description</label>
          <br />
          <TextArea
            name="deskripsi"
            value={formik.values.deskripsi}
            onChange={formik.handleChange}
            errMessage={formik.errors.deskripsi}
          />
        </div>
        <div className="mt-7 flex justify-end">
          <Link to="/income">
            <BaseButton className=" mr-4" variant="white">
              Back
            </BaseButton>
          </Link>
          <BaseButton type="submit">Submit</BaseButton>
        </div>
      </form>
      <Toaster position="top-right" />
    </div>
  );
};

export default CreateIncome;
