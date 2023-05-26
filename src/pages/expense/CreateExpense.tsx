import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";
import TextArea from "../../components/form/TextArea";
import ExpenseInterface from "../../utils/interfaces/expense";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/reducers";
import * as Yup from "yup";
import { createDataExpense } from "../../redux/ExpenseSlice";
import toast, { Toaster } from "react-hot-toast";
import BaseSelect from "../../components/form/BaseSelect";

const CreateExpense = () => {
  const date = new Date();
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const formattedDate = date.toISOString().split("T")[0];
  const initialValues: ExpenseInterface = {
    deskripsi: "",
    tanggal: formattedDate,
    total_pengeluaran: 0,
    kategori: "",
  };
  const formik = useFormik({
    initialValues,
    validate: (val) => {
      const errors: any = {};
      if (
        (formik.touched.total_pengeluaran && val.total_pengeluaran === 0) ||
        !val.total_pengeluaran
      ) {
        errors.total_pengeluaran = "total pengeluaran tidak boleh kosong";
      }
      return errors;
    },
    onSubmit: async (val, { resetForm }) => {
      await dispatch(createDataExpense(val));
      resetForm();
      toast.success(" berhasil membuat data");
    },
    validationSchema: Yup.object({
      total_pengeluaran: Yup.number().required("deskripsi tidak boleh kosong"),
      deskripsi: Yup.string().required("deskripsi tidak boleh kosong"),
      kategori: Yup.string().required("kategori tidak boleh kosong"),
      tanggal: Yup.date().required("tanggal tidak boleh kosong"),
    }),
  });
  console.log(formik.touched);
  console.log(formik.errors);

  return (
    <div>
      <h3 className="font-bold text-xl">Create Expense</h3>
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
            onBlur={formik.handleBlur}
            value={formik.values.tanggal}
            isInvalid={!!formik.errors?.tanggal && !!formik.touched.tanggal}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Expense Total</label>
          <br />
          <BaseInput
            className="w-full mt-2 "
            type="number"
            name="total_pengeluaran"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.total_pengeluaran}
            errMessage={formik.errors?.total_pengeluaran}
            placeholder="12000"
            isInvalid={
              !!formik.errors?.total_pengeluaran &&
              !!formik.touched.total_pengeluaran
            }
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Kategori</label>
          <br />
          <BaseSelect
            className="w-full"
            name="kategori"
            onChange={formik.handleChange}
            value={formik.values.kategori}
            errMessage={formik.errors?.kategori}
            isInvalid={!!formik.errors?.kategori && !!formik.touched.kategori}
            onBlur={formik.handleBlur}
          >
            <option value="">Kategori</option>
            <option value="primary">Primary</option>
            <option value="snacking">Snacking</option>
            <option value="invest">Invest</option>
          </BaseSelect>
        </div>
        <div className="mt-4">
          <label htmlFor="">Description</label>
          <br />
          <TextArea
            name="deskripsi"
            value={formik.values.deskripsi}
            onChange={formik.handleChange}
            errMessage={formik.errors.deskripsi}
            isInvalid={!!formik.errors?.deskripsi && !!formik.touched.deskripsi}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="mt-7 flex justify-end">
          <Link to="/expense">
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

export default CreateExpense;
