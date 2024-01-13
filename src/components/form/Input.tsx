import React, { forwardRef } from "react";

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: React.ReactNode;
  addClassName?: string;
}

const Input = forwardRef(({
  type = "text",
  label,
  addClassName,
  disabled,
  ...props
}: Props, ref: any) => {
  return (
    <div className={"w-full flex flex-col" + (addClassName ? " " + addClassName : "")}>
      {label && <label className="mb-1">{label}</label>}
      <input
        ref={ref}
        type={type ? type : "text"}
        className={"border rounded focus:outline focus:outline-2 focus:outline-blue-400 p-2" + (disabled ? " bg-gray-100 text-gray-500" : "")}
        {...props}
      />
    </div>
  );
});

export default Input;
