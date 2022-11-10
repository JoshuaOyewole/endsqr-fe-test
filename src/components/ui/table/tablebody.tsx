import TableStyle from "./_table.module.scss"


type tableBodyProps = {
  children: React.ReactNode
}

export default function TableRow(props: tableBodyProps) {
  return <tr className={TableStyle["table-row"]}>
    {props.children}
  </tr>;
}
