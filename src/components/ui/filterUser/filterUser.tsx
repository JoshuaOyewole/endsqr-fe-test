import React, { useState } from "react";
import InputField from "../../form/inputFields/input/Input";
import Button from "../button/button/button";
import FilterUserStyles from "./_filterUser.module.scss"


type credentialsProps = {
    organization: string,
    username: string,
    email: string,
    phone: string,
    status: string
}

function FilterUser() {
    const [credentails, setCredentials] = useState<credentialsProps>(
        {
            organization: " ",
            username: " ",
            email: " ",
            phone: " ",
            status: " "
        }
    )

    const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setCredentials((prev) => ({ ...prev, [e.currentTarget.id]: e.currentTarget.value }));
        console.log(credentails.username);  
    }


    const handleFilter = (event: React.MouseEvent) => {
        /* Peform filter function based on the inputs from the user. Currently just toggling between showing and hiding the filter section.. */
        event.currentTarget.parentElement?.parentElement?.parentElement?.classList.toggle("hide");
    }

    const resetFields = () => {
        console.log(credentails);
    }

    return (
        <div className={`${FilterUserStyles.filterUser__container}  hide`}>
            <div className={FilterUserStyles.filterUser__filterFrom}>
                <InputField
                    type="text"
                    placeholder="Select"
                    name="organization"
                    id="organization"
                    value={credentails.organization}
                    onChange={handleChange}
                    className={FilterUserStyles.filterUser__inputField}
                    label="Organization"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />

                <InputField
                    type="text"
                    placeholder="User"
                    name="username"
                    id="username"
                    value={credentails.username}
                    onChange={handleChange}
                    className={FilterUserStyles.filterUser__inputField}
                    label="Username"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />

                <InputField
                    type="text"
                    placeholder="Email"
                    name="email"
                   id="email"
                    value={credentails.email}
                    onChange={handleChange}
                    className={FilterUserStyles.filterUser__inputField}
                    label="Email"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />

                <InputField
                    type="Date"
                    placeholder="Date"
                    name="date"
                    id="date"
                    className={FilterUserStyles.filterUser__inputField}
                    label="Date"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />
                <InputField
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    id="phone"
                    value={credentails.phone}
                    onChange={handleChange}
                    className={FilterUserStyles.filterUser__inputField}
                    label="Phone Number"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />
                <InputField
                    type="text"
                    placeholder="Status"
                    name="status"
                    id="status"
                    className={FilterUserStyles.filterUser__inputField}
                    label="Status"
                    value={credentails.status}
                    onChange={handleChange}
                    labelClassName={FilterUserStyles.filterUser__inputContainer}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />

                <div className={FilterUserStyles.filterUser__btnContainer}>
                    <Button btnClassName="border_btn" handleClick={resetFields}>Reset</Button>
                    <Button btnClassName="primary_btn" handleClick={handleFilter}>Filter</Button>
                </div>
            </div>
        </div>

    )
}

export default FilterUser