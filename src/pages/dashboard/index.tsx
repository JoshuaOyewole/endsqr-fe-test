import UserDashboardLayout from "../../layouts/userDashboardLayout/userDashboardLayout"
import DashboardStyle from "./_dashboard.module.scss"
import UserBox from "../../components/ui/userBox/userBox"
import userIcon from "../../assets/images/userIcon.png"
import activeUsersIcon from "../../assets/images/activeUsers.png"
import usersWithLoanIcon from "../../assets/images/usersWithLoanIcon.png"
import usersWithSavingsIcon from "../../assets/images/usersWithSavingsIcon.png"

type Props = {}

export default function index({ }: Props) {
  return (
    <div className="wrapper">
      <UserDashboardLayout>

        {/* USER INFO BOXES */}
        <div className={DashboardStyle.userbox__container}>
          <h1 className={DashboardStyle.userbox__userHeading}>users</h1>

          <div className={DashboardStyle.userbox__boxesContainer}>
            <UserBox 
              boxTitle="Users" 
              userInfo="2,458" 
              boxIcon={<img src={userIcon} alt="user icon" />}
            />

            <UserBox 
              boxTitle="Active Users" 
              userInfo="2,453" 
              boxIcon={<img src={activeUsersIcon} alt="user icon" />}
            />

            <UserBox 
              boxTitle="Users with Loans" 
              userInfo="12,453" 
              boxIcon={<img src={usersWithLoanIcon} alt="user icon" />} 
            />

            <UserBox 
              boxTitle="Users with Savings" userInfo="102,453" 
              boxIcon={<img src={usersWithSavingsIcon} alt="user icon" />} 
            />
          </div>
        </div>


      </UserDashboardLayout>
    </div>
  )
}