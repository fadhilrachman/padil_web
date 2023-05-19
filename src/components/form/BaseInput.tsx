import React, { ChangeEvent } from "react";

interface Props {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
}
const BaseInput = ({ className, onChange, placeholder, type }: Props) => {
  return (
    <input
      className={`${className} shadow w-min  border rounded  py-3 px-3 text-gray-700 bg-white focus:outline-none focus:shadow-outline`}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default BaseInput;
