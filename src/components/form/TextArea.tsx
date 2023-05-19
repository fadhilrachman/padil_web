import React, { ChangeEvent } from "react";

interface Props {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
}
const TextArea = ({ className, onChange, placeholder }: Props) => {
  return (
    <textarea
      className={`${className} shadow w-full  border rounded  py-2 px-3 text-gray-700 bg-white focus:outline-none focus:shadow-outline`}
      onChange={onChange}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
