
type btnProps = {
    btnClassName?: string,
    children: React.ReactNode,
    handleClick: ()=>void
}


function Button(props: btnProps) {
    const { btnClassName, handleClick, children} = props;

    return (
        <button 
            className={`btn ${btnClassName ? btnClassName : ""}`} 
            onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button