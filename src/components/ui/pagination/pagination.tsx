import PaginationStyle from "./_pagination.module.scss"
import Select from "../../form/Select/select"
import PaginationButtonWrapper from "./paginationButtonWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type PaginationProps = {
    usersPerPage: number,
    totalUsers: number,
    paginate: (value: number) => void,
    nextBtn: (totalPages:number) => void,
    prevBtn: (totalPages:number) => void,
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
    
    const displayPageNumbers = pageNumbers.slice(0,3);

    return (
        <div className={PaginationStyle.pagination__container}>
            <div className={PaginationStyle.pagination__statusWrapper}>
                <span className={PaginationStyle.pagination__statusInfo}>Showing</span>
                <Select
                    selectOptions={pageNumbers}
                    selectPlaceholder="10"
                />
                <span className={PaginationStyle["pagination__statusInfo--right"]}> out of 100</span>
            </div>
            <PaginationButtonWrapper>
                <button onClick={() => prevBtn(pageNumbers.length)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {displayPageNumbers.map((page, index) => <button key={index} onClick={() => paginate(page.value)}>{page.value}</button>)}
                <button onClick={() => nextBtn(pageNumbers.length)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </PaginationButtonWrapper>
        </div>
     
    )
}

export default Pagination


