import React from 'react'

interface Props {
  children: React.ReactNode;
  addClassName?: string;
  className?: string;
}

const Row = ({
  children,
  addClassName,
  className,
}: Props) => {
  return (
    <tr
      className={!className ? (
        ""
        + (addClassName ? " " + addClassName : "")
      ) : className}
    >
      {children}
    </tr>
  )
}

export default Row
