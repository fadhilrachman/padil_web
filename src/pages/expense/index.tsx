import React from "react";
import BaseTable from "../../components/BaseTable";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";
import Column from "../../utils/interfaces/column";
const Expense = () => {
  const column: Column[] = [
    {
      title: "Name",
      index: "name",
    },
    {
      title: "Color",
      index: "color",
    },
    {
      title: "Type",
      index: "type",
    },
    {
      title: "Price",
      index: "price",
    },
  ];

  const data: any = [];
  return (
    <div>
      <h3 className="font-bold text-xl">Expense</h3>
      <div className="flex items-center justify-between mt-5">
        <BaseInput className="" placeholder="Search Expense" />
        <BaseButton className="">Insert Data</BaseButton>
      </div>

      <BaseTable column={column} className="mt-5" data={data} />
    </div>
  );
};

export default Expense;
