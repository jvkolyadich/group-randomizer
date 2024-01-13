import React from 'react'

interface Props {
  children: React.ReactNode;
  colSpan?: number;
  addClassName?: string;
  className?: string;
  addThClassName?: string;
  thClassName?: string;
}

const Header = ({
  children,
  colSpan = 1,
  addClassName,
  className,
  addThClassName,
  thClassName,
}: Props) => {
  return (
    <th
      className={!thClassName ? (
        "border-gray-300"
        + (addThClassName ? " " + addThClassName : "")
      ) : thClassName}
      colSpan={colSpan}
    >
      <div
        className={!className ? (
          "flex justify-center items-center my-1 mx-2 font-bold"
          + (addClassName ? " " + addClassName : "")
        ) : className}
      >
        {children}
      </div>
    </th>
  )
}

export default Header
