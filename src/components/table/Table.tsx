import React from 'react'

interface Props {
  header: React.ReactNode;
  body: React.ReactNode;
  addClassName?: string;
  className?: string;
  addTableClassName?: string;
  tableClassName?: string;
}

const Table = ({
  header,
  body,
  addClassName,
  className,
  addTableClassName,
  tableClassName,
}: Props) => {
  return (
    <div
      className={!className ? (
        "w-full border border-gray-300 rounded"
        + (addClassName ? " " + addClassName : "")
      ) : className}
    >
      <div className="w-full overflow-x-auto rounded">
        <table
          className={!tableClassName ? (
            "w-full"
            + (addTableClassName ? " " + addTableClassName : "")
          ) : tableClassName}
        >
          <thead>
            {header}
          </thead>
          <tbody>
            {body}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
