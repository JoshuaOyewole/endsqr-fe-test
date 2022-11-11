import React from "react";
import TableStyles from "./_table.module.scss";
import filterIcon from "../../../assets/images/filter.png";

export interface TableProps {
  children: React.ReactNode;
  tableHeader: Array<string>;
  tableClass?: string;
  tableHeaderClass?: string;
  tableTitle?: string;
  showFilterComponent?:()=>void
}

export default function Table(props: TableProps) {
  return (
    <div className={TableStyles.table_container}>
      <div>{props.tableTitle}</div>
      <table className={props.tableClass}>
        <thead>
          <tr className={props.tableHeaderClass}>
            {props.tableHeader.map((header: string, index: number) => {
              return (
                <th key={index}>
                  {header}
                    <img 
                      onClick={()=>alert("Filtering")} 
                      src={filterIcon} 
                      alt="filter"  
                    />
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
