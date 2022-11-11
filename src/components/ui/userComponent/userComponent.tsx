import React, { useEffect, useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useAccountStatus from "../../../hooks/useAccountStatus"
import DashboardStyle from "../../../pages/dashboard/_dashboard.module.scss"
import UserBox from "../../ui/userBox/userBox"
import userIcon from "../../../assets/images/userIcon.png"
import activeUsersIcon from "../../../assets/images/activeUsers.png"
import usersWithLoanIcon from "../../../assets/images/usersWithLoanIcon.png"
import usersWithSavingsIcon from "../../../assets/images/usersWithSavingsIcon.png"
import Table from "../table/table"
import TableRow from "../table/tablebody"
import Select from "../../form/Select/select"
import TableStyle from "../table/_table.module.scss"
import MoreButton from "../../ui/button/moreButton/moreButton"
import FilterUserComponent from "../../ui/filterUser/filterUser";

type activeProps = {
    iconClassName?: string
  }
  
  type usersProps = {
    createdAt: string,
    orgName: string,
    userName: string,
    email: string
  }[]

const UserComponent = (props: activeProps) => {
    const [users, setUsers] = useState<Array<usersProps>>([])
    const pagesOptions = [
      { value: '10', label: '10' },
      { value: '20', label: '20' },
      { value: '30', label: '30' },
      { value: '40', label: '40' },
      { value: '50', label: '50' },
      { value: '60', label: '60' },
      { value: '70', label: '70' },
      { value: '80', label: '80' },
      { value: '90', label: '90' },
      { value: '100', label: '100' }
    ];
    const userStatus = useAccountStatus("400")
    /*   setUsers(users.push({createdAt:"design"})); */
  
    const viewMore = (event: React.MouseEvent) => {
      console.log(event.currentTarget?.parentElement?.parentElement?.lastElementChild?.classList.toggle("hide"))
    }
  
    useEffect(() => {
      const fetchUsers = async () => {
        const response = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
        setUsers(response.data);
      }
      fetchUsers();
    }, [])
  
    console.log({ users, userStatus });
  return (
    <>
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


        {/* USER TABLE INFO */}
        <Table
          tableHeader={
            ["organization", "username", "email", "phone number", "Date Joined", "status"]
          }
      
        >
          <TableRow moreButton={true}>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td className={`${TableStyle.userStatus}`}>
              <span className={`${TableStyle.userStatusActive} ${props.iconClassName ? props.iconClassName : "inactiveUser"}`}>Inactive</span>
            </td>
            <MoreButton handleClick={viewMore} />
          </TableRow>
          <TableRow moreButton={true}>
            <td>Irorun</td>
            <td>Debby Ogana</td>
            <td>debby2@irorun.com</td>
            <td>08160780928</td>
            <td>Apr 30, 2020 10:00 AM</td>
            <td className={`${TableStyle.userStatus}`}>
              <span className={`${TableStyle.userStatusActive} ${props.iconClassName ? props.iconClassName : "inactiveUser"}`}>Inactive</span>
            </td>
            <MoreButton handleClick={viewMore} />
          </TableRow>
          <TableRow moreButton={true}>
            <td>Lendstar</td>
            <td>Grace Effiom</td>
            <td>grace@lendstar.com</td>
            <td>07060780922</td>
            <td>Apr 30, 2020 10:00 AM</td>
            <td className={`${TableStyle.userStatus}`}>
              <span className={`${TableStyle.userStatusActive} ${props.iconClassName ? props.iconClassName : "inactiveUser"}`}>Inactive</span>
            </td>
            <MoreButton handleClick={viewMore} />
          </TableRow>
          <TableRow moreButton={true}>
            <td>Lendsqr</td>
            <td>Tosin Dokunmu</td>
            <td>tosin@lendsqr.com</td>
            <td>07003309226</td>
            <td>Apr 10, 2020 10:00 AM</td>
            <td className={`${TableStyle.userStatus}`}>
              <span className={`${TableStyle.userStatusActive} ${props.iconClassName ? props.iconClassName : "inactiveUser"}`}>Inactive</span>
            </td>
            <MoreButton handleClick={viewMore} />
          </TableRow>
          <TableRow moreButton={true}>
            <td>Lendsqr</td>
            <td>Grace Effiom</td>
            <td>grace@lendstar.com</td>
            <td>07060780922</td>
            <td>Apr 30, 2020 10:00 AM</td>
            <td className={`${TableStyle.userStatus}`}>
              <span className={`${TableStyle.userStatusActive} ${props.iconClassName ? props.iconClassName : "inactiveUser"}`}>Inactive</span>
            </td>
            <MoreButton handleClick={viewMore} />
          </TableRow>
          <TableRow moreButton={true}>
            <td>Lendsqr</td>
            <td>Tosin Dokunmu</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td className={`${TableStyle.userStatus}`}>
              <span className={`${TableStyle.userStatusActive} ${props.iconClassName ? props.iconClassName : "inactiveUser"}`}>Inactive</span>
            </td>
            <MoreButton handleClick={viewMore} />
          </TableRow>
          <TableRow moreButton={true}>
            <td>Lendsqr</td>
            <td>Tosin Dokunmu</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td className={`${TableStyle.userStatus}`}>
              <span className={`${TableStyle.userStatusActive} ${props.iconClassName ? props.iconClassName : "inactiveUser"}`}>Inactive</span>
            </td>
            <MoreButton handleClick={viewMore} />
          </TableRow>
          <TableRow moreButton={true}>
            <td>Lendsqr</td>
            <td>Tosin Dokunmu</td>
            <td>tosin@lendsqr.com</td>
            <td>08078903721</td>
            <td>Apr 10, 2020 10:00 AM</td>
            <td className={`${TableStyle.userStatus}`}>
              <span className={`${TableStyle.userStatusActive} ${props.iconClassName ? props.iconClassName : "inactiveUser"}`}>Inactive</span>
            </td>
            <MoreButton handleClick={viewMore} />
          </TableRow>
          <TableRow moreButton={true}>
            <td>Lendsqr</td>
            <td>Grace Effiom</td>
            <td>grace@lendstar.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td className={`${TableStyle.userStatus}`}>
              <span className={`${TableStyle.userStatusActive} ${props.iconClassName ? props.iconClassName : "inactiveUser"}`}>Inactive</span>
            </td>
            <MoreButton handleClick={viewMore} />
          </TableRow>
        </Table>
        <FilterUserComponent />

        <div className={TableStyle.pagination__container}>
          <div className={TableStyle.pagination__statusWrapper}>
            <span className={TableStyle.pagination__statusInfo}>Showing</span>
            <Select
              selectOptions={pagesOptions}
              selectPlaceholder="10"
            />
            <span className={TableStyle["pagination__statusInfo--right"]}> out of 100</span>
          </div>

          <div className={TableStyle["pagination__buttonsWrapper"]}>
            <button> <FontAwesomeIcon icon={faChevronLeft} /></button>
            <button> 1</button>
            <button> 2</button>
            <button> 3</button>
            <button> ...</button>
            <button> 15</button>
            <button> 16</button>
            <button> <FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
        </div>
        </>
  )
}

export default UserComponent