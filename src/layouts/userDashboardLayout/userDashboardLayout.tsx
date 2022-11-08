import OnboardingStyles from "./_userDashboardLayout.module.scss"
import logo from "../../assets/images/logo.png"


type OnboardingProps = {
    children: React.ReactNode;
}


function UserDashboardLayout(props: OnboardingProps) {

    return (
        <div className={OnboardingStyles.onboarding}>

            {/* SIDE BAR */}
            <div className={OnboardingStyles.onboarding__sidebar}>
                <div className={OnboardingStyles.onboarding__logo}>
                    <img src={logo} alt='brand logo' />
                    <p className={OnboardingStyles['onboarding__logo--text']}>
                        <span className={OnboardingStyles['onboarding__logo--text-fword']}>Accretio</span>
                        <span className={OnboardingStyles['onboarding__logo--text-sword']}>Africa</span>
                    </p>
                </div>

                {/* SIDE NAVBAR */}
                <div className={OnboardingStyles.onboarding__sideNav}>

                
                </div>

            </div>

            {/* ONBOARDING MODAL */}
            {props.children}
        </div>

    )
}

export default UserDashboardLayout