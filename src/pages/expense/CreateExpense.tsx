import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";
import TextArea from "../../components/form/TextArea";

const CreateExpense = () => {
  return (
    <div>
      <h3 className="font-bold text-xl">Create Expense</h3>
      <form action="" className="mt-5 bg-white shadow rounded p-10">
        <div>
          <label htmlFor="">Tanggal</label>
          <br />
          <BaseInput className="w-full mt-2 " type="date" />
        </div>
        <div className="mt-4">
          <label htmlFor="">Expense Total</label>
          <br />
          <BaseInput
            className="w-full mt-2 "
            type="number"
            placeholder="12000"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Description</label>
          <br />
          <TextArea />
        </div>
        <div className="mt-7 flex justify-end">
          <Link to="/expense">
            <BaseButton className=" mr-4" variant="white">
              Back
            </BaseButton>
          </Link>
          <BaseButton>Submit</BaseButton>
        </div>
      </form>
    </div>
  );
};

export default CreateExpense;
