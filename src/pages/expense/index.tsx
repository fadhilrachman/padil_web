import React from "react";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";

const Expense = () => {
  return (
    <div>
      <h3 className="font-bold text-xl">Expense</h3>
      <div className="flex items-center justify-between mt-5">
        <BaseInput className="" placeholder="Search Expense" />
        <BaseButton className="">Insert Data</BaseButton>
      </div>
    </div>
  );
};

export default Expense;
