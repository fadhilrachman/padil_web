import React, { ChangeEvent } from "react";

interface Props {
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  value?: string;
  errMessage?: string;
  isInvalid: boolean;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
}
const BaseSelect = ({
  className,
  onChange,
  errMessage,
  value,
  name,
  isInvalid,
  children,
  onBlur,
}: Props) => {
  return (
    <>
      <select
        className={`${className} ${
          isInvalid ? "border-red-500" : ""
        } shadow   border rounded  py-2 px-3 text-gray-700 bg-white focus:outline-none focus:shadow-outline`}
        onChange={onChange}
        name={name}
        value={value}
        onBlur={onBlur}
      >
        {children}
      </select>

      {isInvalid && <small className="text-red-500">{errMessage}</small>}
    </>
  );
};

export default BaseSelect;
