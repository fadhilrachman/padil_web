import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseTable from "../../components/BaseTable";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";
import Column from "../../utils/interfaces/column";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/reducers";
import ModalDelete from "../../components/ModalDelete";
import { convertDate } from "../../utils";
import { getDataExpense, deleteDataExpense } from "../../redux/ExpenseSlice";

interface Modal {
  show: boolean;
  id: string;
}
const Expense = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const income = useSelector((state: RootState) => state.Expense);
  const dataIncome = income.data;
  const [modal, setModal] = useState<Modal>({ show: false, id: "" });

  const column: Column[] = [
    {
      title: "Tanggal",
      index: "tanggal",
      render: (val: any, item: Date) => {
        console.log({ item });

        return <>{convertDate(item)}</>;
      },
    },
    {
      title: "Total Pengeluaran",
      index: "total_pengeluaran",
    },
    {
      title: "Deskripsi",
      index: "deskripsi",
    },
    {
      title: "Action",
      index: "price",
      render: (param: any) => {
        return (
          <div className="flex justify-center">
            <BaseButton variant="white" className="mr-3">
              Update
            </BaseButton>
            <BaseButton
              variant="red"
              onClick={() => setModal({ show: true, id: param._id })}
            >
              Delete
            </BaseButton>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(getDataExpense());
  }, [dispatch]);

  const handleDelete = async () => {
    dispatch(deleteDataExpense(modal.id));

    setModal({ show: false, id: "" });
    dispatch(getDataExpense());
  };
  return (
    <div>
      <h3 className="font-bold text-xl">Pengeluaran</h3>
      <div className="flex items-center justify-between mt-5">
        <BaseInput className="" placeholder="Search Pengeluaran" />
        <Link to="/expense-create">
          <BaseButton className="">Insert Data</BaseButton>
        </Link>
      </div>
      <ModalDelete
        show={modal.show}
        onHide={() => setModal({ ...modal, show: false })}
        functDelete={handleDelete}
      />
      <BaseTable
        column={column}
        className="mt-5"
        data={dataIncome}
        loading={true}
      />
    </div>
  );
};

export default Expense;
