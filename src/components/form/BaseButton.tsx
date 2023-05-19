import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}
const BaseButton = ({ children, onClick, className, type }: Props) => {
  return (
    <button
      className={`${className} bg-violet-500 text-white font-bold rounded py-3 px-3`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default BaseButton;
