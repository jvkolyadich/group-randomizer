import React, { useState } from "react";

interface Props {
  value: number | undefined;
  onChange(value: number | undefined): void;
  min?: number;
  max?: number;
  addClassName?: string;
  disabled?: boolean;
}

const NumberInput = ({
  value,
  onChange,
  min = -Infinity,
  max = Infinity,
  addClassName,
  disabled,
  ...props
}: Props) => {
  const [valueBeforeEdit, setValueBeforeEdit] = useState(value === undefined ? min : value);

  const parseInt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (
      e.target.value === ''
      || isNaN(value)
      || value === Infinity
      || value === -Infinity
    ) {
      onChange(undefined);
    } else {
      if (value > max) {
        onChange(max);
      } else if (value < min) {
        onChange(min);
      } else {
        onChange(value);
      }
    }
  }

  return (
    <input
      type="text"
      className={
        "border rounded focus:outline focus:outline-2 focus:outline-blue-400 p-2"
        + (addClassName ? " " + addClassName : "")
        + (disabled ? " bg-gray-100 text-gray-500" : "")
      }
      value={value === undefined ? '' : value}
      onChange={parseInt}
      onFocus={() => setValueBeforeEdit(value === undefined ? min : value)}
      onBlur={() => value === undefined && onChange(valueBeforeEdit)}
      disabled={disabled}
      {...props}
    />
  );
};

export default NumberInput;
