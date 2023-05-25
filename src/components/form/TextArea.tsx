import React, { ChangeEvent } from "react";

interface Props {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
  errMessage?: string;
  name?: string;
  value?: string;
}
const TextArea = ({
  className,
  onChange,
  placeholder,
  errMessage,
  name,
  value,
}: Props) => {
  return (
    <>
      <textarea
        className={`${className} ${
          errMessage ? "border-red-500" : ""
        }  shadow w-full  border rounded  py-2 px-3 text-gray-700 bg-white focus:outline-none focus:shadow-outline`}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
      ></textarea>
      {errMessage && <small className="text-red-500">{errMessage}</small>}
    </>
  );
};

export default TextArea;
