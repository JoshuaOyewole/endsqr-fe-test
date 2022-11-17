import PaginationStyles from "./_pagination.module.scss"

type Props = {
    children:React.ReactNode;
}

const PaginationButtonWrapper = (props: Props) => {
    const {children} = props;

    return (
        <div className={PaginationStyles["pagination__buttonsWrapper"]}>
            {children}
        </div>
    )
}

export default PaginationButtonWrapper