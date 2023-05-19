import React from "react";
import { Link } from "react-router-dom";
import BaseTable from "../../components/BaseTable";
import BaseButton from "../../components/form/BaseButton";
import BaseInput from "../../components/form/BaseInput";
import Column from "../../utils/interfaces/column";
const Income = () => {
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
  // {
  //   name: "Apple MacBook Pro 17",
  //   color: "purple",
  //   type: "	Accessories",
  //   price: 22999,
  // },

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

      <BaseTable column={column} className="mt-5" data={data} />
    </div>
  );
};

export default Income;
