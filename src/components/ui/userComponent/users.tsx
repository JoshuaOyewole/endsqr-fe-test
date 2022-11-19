import UserStyle from "./_user.module.scss"
import React, { useEffect, useState } from "react"
import axios from "axios"
import TableStyle from "../table/_table.module.scss"
import DashboardStyle from "../../../pages/dashboard/_dashboard.module.scss"
import UserBox from "../userBox/userBox"
import userIcon from "../../../assets/images/userIcon.png"
import activeUsersIcon from "../../../assets/images/activeUsers.png"
import usersWithLoanIcon from "../../../assets/images/usersWithLoanIcon.png"
import usersWithSavingsIcon from "../../../assets/images/usersWithSavingsIcon.png"
import Table from "../table/table"
import TableRow from "../table/tablebody"
import MoreButton from "../button/moreButton/moreButton"
import FilterUser from "../filterUser/filterUser";
import MoreBtnContainer from "../button/moreButton/moreBtnContainer";
import FilterIcon from "../filterUser/filterIcon";
import Pagination from "../pagination/pagination"


type usersComponentProps = {
  iconClassName?: string
}

type usersProps = {
  id: number;
  accountBalance: string;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string
}[]


const Users = (props: usersComponentProps) => {
  const [users, setUsers] = useState<usersProps>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  /* FETCH USERS FROM API */
  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
      setUsers(response.data);
      localStorage.setItem("users", JSON.stringify(response.data)); 
    } catch (error) {
      throw error
    }
  }

  const viewMore = (event: React.MouseEvent) => {
    event.currentTarget?.parentElement?.parentElement?.lastElementChild?.classList.toggle("hide");
  }


  useEffect(() => {
    //Fetch users data stored in localStorage
    const getUsers = localStorage.getItem("users");

    if (getUsers != null) {
      setUsers(JSON.parse(getUsers));
      
    } else {
      fetchUsers();
    }
  }, [])


  /* GET CURRENT USERS */
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser,
    indexOfLastUser);
  

    console.log(currentPage);
    

  
  const next = (totalPages: number) => {
    if (currentPage >= totalPages) setCurrentPage(1);
    setCurrentPage((prevPage) => (prevPage + 1));
  }

  const prev = (totalPages: number) => {
    if (currentPage == 1) setCurrentPage(totalPages);
    setCurrentPage(currentPage - 1);
  }

  /* CHANGE PAGE */
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
        theadIcon={FilterIcon}
      >
        {
          currentUsers?.map(user => {
            return <TableRow key={user.id}>
              <td key={user?.orgName}>{user?.orgName}</td>
              <td key={user?.userName}>{user?.userName}</td>
              <td key={user?.email}>{user?.email}</td>
              <td key={user?.phoneNumber}>{user?.phoneNumber}</td>
              <td key={user?.createdAt}>May 15, 2020 10:00 AM</td>
              <td key={user?.accountBalance} className={`${TableStyle.userStatus}`}>
                <span className={`${UserStyle.defaultUserStatus} ${props.iconClassName ? props.iconClassName : "Active"}`}>Active</span>
              </td>
              <MoreButton handleClick={viewMore} />
              <MoreBtnContainer userID={user?.id} />
            </TableRow>
          })
        }
      </Table>
      <FilterUser />



      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
        nextBtn={next}
        prevBtn={prev}
      />

    </>
  )
}

export default Users