import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BaseTable from "../../components/BaseTable";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";
import Column from "../../utils/interfaces/column";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/reducers";
import { getDataIncome } from "../../redux/IncomeSlice";

const Income = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const income = useSelector((state: RootState) => state.Income);
  const dataIncome = income.data;

  const column: Column[] = [
    {
      title: "Tanggal",
      index: "tanggal",
    },
    {
      title: "Total Pemasukan",
      index: "total_pemasukan",
    },
    {
      title: "Deskripsi",
      index: "deskripsi",
    },
    {
      title: "Action",
      index: "price",
      render: (param: any) => {
        console.log({ param });

        return (
          <div className="flex justify-center">
            <BaseButton variant="white" className="mr-3">
              Update
            </BaseButton>
            <BaseButton variant="red">Delete</BaseButton>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(getDataIncome());
  }, []);
  console.log({ dataIncome });

  const data: any = [];
  return (
    <div>
      <h3 className="font-bold text-xl">Income</h3>
      <div className="flex items-center justify-between mt-5">
        <BaseInput className="" placeholder="Search Income" />
        <Link to="/income-create">
          <BaseButton className="">Insert Data</BaseButton>
        </Link>
      </div>

      <BaseTable
        column={column}
        className="mt-5"
        data={dataIncome}
        loading={true}
      />
    </div>
  );
};

export default Income;
