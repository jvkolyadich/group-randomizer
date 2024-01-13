import React, { forwardRef } from 'react';

interface OptionMap {
  name: any;
  value: any;
}

const isOptionMap = (option: any): option is OptionMap => {
  return typeof option === 'object'
         && option.name !== null
         && option.name !== undefined
         && option.value !== null
         && option.value !== undefined;
}

interface Props extends React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> {
  options: Array<any>;
  value: any;
  setValue(value: any): void;
  includeNone?: boolean;
  addClassName?: string;
}

const Dropdown = forwardRef(({
  options,
  value,
  setValue,
  includeNone = false,
  disabled,
  addClassName,
}: Props, ref: any) => {
  return (
    <select
      ref={ref}
      className={
        "border rounded bg-white text-black focus:outline focus:outline-2 focus:outline-blue-400 p-2 pr-[7%]"
        + (disabled ? " bg-gray-100" : "")
        + (addClassName ? " " + addClassName : "")
      }
      onChange={(e) => setValue(e.target.value === "None" ? undefined : e.target.value)}
      value={value === undefined ? "None": value}
      disabled={disabled}
    >
      {includeNone && <option value="None">None</option>}
      {options.map(((option, index) => (
        <option
          key={index}
          value={isOptionMap(option) ? option.value : option}
        >
          {isOptionMap(option) ? option.name : option}
        </option>
      )))}
    </select>
  );
});

export default Dropdown;
