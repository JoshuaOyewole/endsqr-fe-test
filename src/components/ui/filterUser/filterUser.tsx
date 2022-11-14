import InputField from "../../form/inputFields/input/Input";
import Button from "../button/button/button";
import FilterUserStyles from "./_filterUser.module.scss"

type filterUserProps = {}

function FilterUser(props: filterUserProps) {

    const handleFilter = (event: React.MouseEvent) => {
        event.currentTarget.parentElement?.parentElement?.parentElement?.classList.toggle("hide");
    }

    return (
        <div className={`${FilterUserStyles.filterUser__container}  hide`}>
            <div className={FilterUserStyles.filterUser__filterFrom}>
                <InputField
                    type="text"
                    placeholder="Select"
                    name="Organization"
                    className={FilterUserStyles.filterUser__inputField}
                    label="Organization"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />

                <InputField
                    type="text"
                    placeholder="User"
                    name="username"
                    className={FilterUserStyles.filterUser__inputField}
                    label="Username"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />

                <InputField
                    type="text"
                    placeholder="Email"
                    name="Email"
                    className={FilterUserStyles.filterUser__inputField}
                    label="Email"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />

                <InputField
                    type="Date"
                    placeholder="Date"
                    name="Organization"
                    className={FilterUserStyles.filterUser__inputField}
                    label="Date"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />
                <InputField
                    type="text"
                    placeholder="Phone Number"
                    name="Organization"
                    className={FilterUserStyles.filterUser__inputField}
                    label="Phone Number"
                    labelClassName={FilterUserStyles.filterUser__label}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />
                <InputField
                    type="text"
                    placeholder="Status"
                    name="Status"
                    className={FilterUserStyles.filterUser__inputField}
                    label="Status"
                    labelClassName={FilterUserStyles.filterUser__inputContainer}
                    inputContainerClassName={FilterUserStyles.inputContainer}
                />

                <div className={FilterUserStyles.filterUser__btnContainer}>
                    <Button btnClassName="border_btn" handleClick={handleFilter}>Reset</Button>
                    <Button btnClassName="primary_btn" handleClick={handleFilter}>Filter</Button>
                </div>
            </div>
        </div>

    )
}

export default FilterUser