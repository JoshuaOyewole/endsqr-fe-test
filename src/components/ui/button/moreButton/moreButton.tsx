import MoreBtnStyle from "./_moreBtn.module.scss";

type moreButtonProps = {
    handleClick: ()=>void
}

function MoreButton(props:moreButtonProps) {

    return (
      <td>
        <button onClick={props.handleClick} className={MoreBtnStyle["moreBtn-invertDots"]}>. . .</button>
      </td>
    )
  }

  export default MoreButton