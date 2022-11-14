import UserInfoSection from "./userInfoSection";
import UserStyle from "./_user.module.scss"

type usersProps = {
    id: number;
    accountBalance: string;
    accountNumber: string,
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;

    profile: {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        avatar: string,
        bvn: string,
        gender: string
    },
    guarantor: {
        firstName: string,
        lastName: string,
        phoneNumber: string
    },
    socials: {
        facebook: string,
        instagram: string,
        twitter: string
    }
    education: {
        level: string,
        employmentStatus: string,
        sector: string,
        duration: string,
        officeEmail: string,
        monthlyIncome: [string],
        loanRepayment: string
    }
}[]

type userDetails = {
    userDetail: usersProps
}
const GeneralDetails = (props: userDetails) => {

    return (
        <div className={UserStyle.userDetailsContainer}>
           <UserInfoSection
                    tableHeader={["full Name", "Phone Number", "Email Address", "Bvn", "Gender", "Marital status", "Children", "Type of residence"]}
                    tdatas={personalInfo}
                    tableTitle="Personal Information"
                />
                <UserInfoSection
                    tableHeader={["level of education", "employment status", "sector of employment", "Duration of employment", "office email", "Monthly income", "loan repayment"]}
                    tdatas={education}
                    tableTitle="Education and Employment"
                />
                <UserInfoSection
                    tableHeader={["Twitter", "Facebook", "Instagram"]}
                    tdatas={socials}
                    tableTitle="Socials"
                />
                <UserInfoSection
                    tableHeader={["full Name", "Phone Number", "Email Address", "Relationship"]}
                    tdatas={guarantor}
                    tableTitle="Guarantor"
                />
        </div>
    )

}

export default GeneralDetails;