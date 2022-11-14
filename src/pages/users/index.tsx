import UserDetails from "../../components/ui/userComponent/userDetail";
import UserDashboardLayout from "../../layouts/userDashboardLayout/userDashboardLayout";

type Props = {}

export default function index({ }: Props) {


  return (
    <div className="wrapper">
      <UserDashboardLayout>
        <UserDetails />
      </UserDashboardLayout>
    </div>
  )
}