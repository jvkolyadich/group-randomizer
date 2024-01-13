import React from "react";

interface Props {
  child: React.ReactNode | string;
  onClick(): void;
  addClassName?: string;
  disabled?: boolean;
  type?: "text" | "icon";
}

const Button = ({
  type = "text",
  child,
  onClick,
  addClassName,
  disabled,
}: Props) => {
  return type === "text" ? (
    <button
      className={
        "p-2 bg-blue-600 text-white rounded flex justify-center items-center" +
        (disabled ? " bg-opacity-60" : " hover:bg-opacity-80 active:bg-opacity-70") +
        (addClassName ? " " + addClassName : "")
      }
      onClick={onClick}
      disabled={disabled}
    >
      {child}
    </button>
  ) : (
    <button
      className={
        (disabled ? "opacity-60" : "hover:opacity-80 active:opacity-70") +
        (addClassName ? " " + addClassName : "")
      }
      onClick={onClick}
      disabled={disabled}
    >
      {child}
    </button>
  );
};

export default Button;
