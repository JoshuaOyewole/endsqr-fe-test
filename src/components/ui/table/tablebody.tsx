
import MoreBtnContainer from "../button/moreButton/moreBtnContainer";
import TableStyle from "./_table.module.scss"


type tableBodyProps = {
  children: React.ReactNode,
  moreButton?: boolean
}

export default function TableRow(props: tableBodyProps) {
  const activateUser = () => {
    alert('User activated')
  }
  const blacklistUser = () => {
    alert('User blacklisted')
  }
  const viewUserDetails = () => {
    alert(' viewing User details')
  }

  return <tr className={TableStyle["table-row"]}>
    {props.children}
    
    {props.moreButton && <MoreBtnContainer activateUser={activateUser} blacklistUser={blacklistUser} viewUserDetails={viewUserDetails} />}
  </tr>;
}
