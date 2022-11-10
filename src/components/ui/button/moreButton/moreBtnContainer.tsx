import MoreBtnStyle from "./_moreBtn.module.scss";


type moreBtnContainerProps = {
    viewUserDetails: () => void,
    blacklistUser: () => void,
    activateUser: () => void
}


function MoreBtnContainer(props: moreBtnContainerProps) {
    const { viewUserDetails, blacklistUser, activateUser} = props;
    return (
        <div className={MoreBtnStyle["moreBtn-container"]}>
            <button onClick={viewUserDetails} className={MoreBtnStyle["moreBtn-btn"]}>
                View Details
            </button>
            <button onClick={blacklistUser} className={MoreBtnStyle["moreBtn-btn"]}>
                Blacklist User
            </button>
            <button onClick={activateUser} className={MoreBtnStyle["moreBtn-btn"]}>
                Activate Use
            </button>
        </div>
    )
}

export default MoreBtnContainer