import React from "react";
import Column from "../utils/interfaces/column";

interface Props {
  column: Column[];
  data?: any;
  loading?: boolean;
  className?: string;
}
const BaseTable = ({ column, data, loading, className }: Props) => {
  return (
    <table className={`${className} w-full text-sm text-left  shadow `}>
      <thead className="text-xs  uppercase  bg-gray-50 rounded-t-full  ">
        <tr>
          {column.map((val) => {
            console.log({ val });

            return <th className="px-6 py-3 font-extrabold">{val.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white   font-">
          {data?.length === 0 ? (
            <td className="px-6 py-4 text-center" colSpan={column.length}>
              Tidak ada Data
            </td>
          ) : (
            data?.map((val: any) =>
              column.map((valColumn) => {
                return <td className="px-6 py-4">{val[valColumn?.index]}</td>;
              })
            )
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default BaseTable;
