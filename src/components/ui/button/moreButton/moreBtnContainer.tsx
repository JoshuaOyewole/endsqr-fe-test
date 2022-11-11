import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoreBtnStyle from "./_moreBtn.module.scss";
import blacklistUserIcon from "../../../../assets/images/user-times.png"
import activateUserIcon from "../../../../assets/images/user-check.png"


type moreBtnContainerProps = {
    viewUserDetails: () => void,
    blacklistUser: () => void,
    activateUser: () => void
}


function MoreBtnContainer(props: moreBtnContainerProps) {
    const { viewUserDetails, blacklistUser, activateUser } = props;
    return (
        <td className={`${MoreBtnStyle["moreBtn-container"]} hide`}>
            <button onClick={viewUserDetails} className={MoreBtnStyle["moreBtn-btn"]}>
                <span className={MoreBtnStyle["moreBtn-icon"]}><FontAwesomeIcon icon={faEye} /></span> 
                <span className={MoreBtnStyle["moreBtn-text"]}>View Details</span>    
            </button>
            <button onClick={blacklistUser} className={MoreBtnStyle["moreBtn-btn"]}>
                <img src={blacklistUserIcon} alt="balcklist user" className={MoreBtnStyle["moreBtn-icon"]} />
                <span className={MoreBtnStyle["moreBtn-text"]}>Blacklist User</span>
            </button>
            <button onClick={activateUser} className={MoreBtnStyle["moreBtn-btn"]}>
                <img src={activateUserIcon} alt="activate user" className={MoreBtnStyle["moreBtn-icon"]} />
                <span className={MoreBtnStyle["moreBtn-text"]}>Activate Use</span>
            </button>
        </td>
    )
}

export default MoreBtnContainer