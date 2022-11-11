
import UserComponent from "../../components/ui/userComponent/userComponent"
import UserDashboardLayout from "../../layouts/userDashboardLayout/userDashboardLayout"



export default function index() {

 
  return (
    <div className="wrapper">
      <UserDashboardLayout>
        <UserComponent /> 
      </UserDashboardLayout>
    </div>
  )
}