import TableStyle from "../table/_table.module.scss"
import Select from "../../form/Select/select"
import PaginationButtonWrapper from "./paginationButtonWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type PaginationProps = {
    usersPerPage: number,
    totalUsers: number,
    paginate: (value: number) => void,
    nextBtn: () => void,
    prevBtn: () => void,
}

type pageNumberProps = {
    value: number,
    label: number
}[];

const Pagination = (props: PaginationProps) => {
    const { usersPerPage, totalUsers, paginate, nextBtn, prevBtn } = props;

    /* GETTING PAGE NUMBER */
    const pageNumbers: pageNumberProps = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push({ value: i, label: i });
    }

    return (
        <div className={TableStyle.pagination__container}>
            <div className={TableStyle.pagination__statusWrapper}>
                <span className={TableStyle.pagination__statusInfo}>Showing</span>
                <Select
                    selectOptions={pageNumbers}
                    selectPlaceholder="10"
                />
                <span className={TableStyle["pagination__statusInfo--right"]}> out of 100</span>
            </div>
            <PaginationButtonWrapper>
                <button onClick={() => prevBtn()}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {pageNumbers.map((page, index) => <button key={index} onClick={() => paginate(page.value)}>{page.value}</button>)}
                <button onClick={() => nextBtn()}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </PaginationButtonWrapper>
        </div>
    )
}

export default Pagination


