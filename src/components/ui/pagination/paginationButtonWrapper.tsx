import TableStyle from "../table/_table.module.scss"

type Props = {
    children:React.ReactNode;
}

const PaginationButtonWrapper = (props: Props) => {
    const {children} = props;

    return (
        <div className={TableStyle["pagination__buttonsWrapper"]}>
            {children}
        </div>
    )
}

export default PaginationButtonWrapper