import DashboardStyles from "./_userDashboardLayout.module.scss"
import logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";
import { NavLink } from "react-router-dom";


type DashboardProps = {
    children: React.ReactNode;
}



function UserDashboardLayout(props: DashboardProps) {
    const { children } = props;


    return (
        <div className={DashboardStyles.dashboard__container}>
            {/* HEADER SECTION (TOP NAVBAR) */}
            <header className={DashboardStyles.dashboard__header}>
                <div className={DashboardStyles.dashboard__logoContainer}>
                    <NavLink to="/" className="logoCobt">
                        <img
                            src={logo}
                            alt="LendSqr Logo"
                            className={DashboardStyles.dashboard__logo}
                        />
                    </NavLink>
                </div>
                <div className={DashboardStyles.dashboard__searchContainer}>
                    <input
                        type="search"
                        name="search"
                        placeholder="Search for anything"
                        className={DashboardStyles.dashboard__searchInput}
                    />
                    <button className={DashboardStyles.dashboard__submitSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={DashboardStyles.dashboard__headerNavWrapper}>
                    <div className="linkContainer">
                        <NavLink to="/#doc" className={DashboardStyles["dashboard__navlink--doc"]}>Docs</NavLink>
                    </div>
                    <button className={DashboardStyles.userProfile__icon}>
                        <FontAwesomeIcon icon={faBell} className={DashboardStyles.userProfile__bellIcon} />
                    </button>
                    <div className={DashboardStyles.userProfile__container}>
                        <div className={DashboardStyles.userProfile__picture}></div>
                        <h4 className={DashboardStyles.userProfile__userName}>Adedeji</h4>
                        <button className={DashboardStyles.userProfile__icon}>
                            <FontAwesomeIcon
                                icon={faCaretDown}
                            />
                        </button>
                    </div>
                </div>
            </header>

            <div className={DashboardStyles.dashboard__wrapper}>
                {/* SIDEBAR */}
                <Sidebar />

                {/* MAIN SECTION */}
                <main className={DashboardStyles.dashboard__content}>
                    {children}
                </main>
            </div>

        </div>

    )
}

export default UserDashboardLayout