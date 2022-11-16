import Users from "../../components/ui/userComponent/users"
import UserDashboardLayout from "../../layouts/userDashboardLayout/userDashboardLayout"

export default function index() {

  return (
    <div className="wrapper">
      <UserDashboardLayout>
        <Users /> 
      </UserDashboardLayout>
    </div>
  )
}