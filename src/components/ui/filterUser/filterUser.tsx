import React, { useState, useEffect } from "react";
import InputField from "../../form/inputFields/input/Input";
import Button from "../button/button/button";
import FilterUserStyles from "./_filterUser.module.scss"


type credentialsProps = {
    organization: string,
    username: string,
    email: string,
    phone: string,
    status: string,
    date: Date
}

function FilterUser() {
    const initialValue = {
        organization: "",
        username: "",
        email: "",
        phone: "",
        status: "",
        date: new Date()
    };
    const [credentials, setCredentials] = useState<credentialsProps>(initialValue)

    const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        //Extract the input name and Value 
        const { name, value } = e.currentTarget;
        //Update each field 
        setCredentials((prev) => ({ ...prev, [name]: value }));
    }


    const handleFilter = (event: React.MouseEvent) => {
        /* Peform filter function based on the inputs from the user. Currently just toggling between showing and hiding the filter section.. */
        event.currentTarget.parentElement?.parentElement?.parentElement?.classList.toggle("hide");
    }

    const resetFields = () => {
        setCredentials({ ...initialValue });
    }

    return (
        <div className={`${FilterUserStyles.filterUser__container}  hide`}>
            <div className={FilterUserStyles.filterUser__filterFrom}>
                <InputField
                    type="text"
                    placeholder="Select"
                    name="organization"
                    value={credentials.organization}
                    id="organization"
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
                    value={credentials.username}
                    id="username"
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
                    value={credentials.email}
                    onChange={handleChange}
                    className={FilterUserStyles.filterUser__inputField}
                    label="Email"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />

                <InputField
                    type="Date"
                    placeholder="Date"
                    value={credentials.date}
                    onChange={handleChange}
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
                    value={credentials.phone}
                    id="phone"
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
                    value={credentials.status}
                    className={FilterUserStyles.filterUser__inputField}
                    label="Status"
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