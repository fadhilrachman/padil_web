import React, { ChangeEvent } from "react";

interface Props {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
  isInvalid?: boolean;
  value?: string | number;
  errMessage?: string;
  name?: string;
}
const BaseInput = ({
  className,
  onChange,
  placeholder,
  type,
  errMessage,
  value,
  name,
}: Props) => {
  const color = "";
  return (
    <>
      <input
        className={`${className} ${
          errMessage ? "border-red-500" : ""
        } shadow   border rounded  py-2 px-3 text-gray-700 bg-white focus:outline-none focus:shadow-outline`}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
      />
      {errMessage && <small className="text-red-500">{errMessage}</small>}
    </>
  );
};

export default BaseInput;
