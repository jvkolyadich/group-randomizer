import React, { forwardRef } from 'react'

interface Props {
  children: React.ReactNode;
  colSpan?: number;
  addClassName?: string;
  className?: string;
  addTdClassName?: string;
  tdClassName?: string;
}

const Data = forwardRef(({
  children,
  colSpan = 1,
  addClassName,
  className,
  addTdClassName,
  tdClassName,
}: Props, ref: any) => {
  return (
    <td
      ref={ref}
      className={!tdClassName ? (
        "border-gray-300"
        + (addTdClassName ? " " + addTdClassName : "")
      ) : tdClassName}
      colSpan={colSpan}
    >
      <div
        className={!className ? (
          "flex justify-center items-center text-center py-1 px-2"
          + (addClassName ? " " + addClassName : " whitespace-nowrap")
        ) : className}
      >
        {children}
      </div>
    </td>
  )
})

export default Data
