import React from "react";
import TableStyles from "./_table.module.scss";

export interface TableProps {
  children: React.ReactNode;
  tableHeader: Array<string>;
  tableClass?: string;
  tableHeaderClass?: string;
}

export default function Table(props: TableProps) {
  return (
    <div className={TableStyles.table_container}>
      <div>Title</div>
      <table className={props.tableClass}>
        <thead>
          <tr className={props.tableHeaderClass}>
            {props.tableHeader.map((header: string, index: number) => {
              return (
                <th key={index} className="xxs">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}
