const Button = ({
    classes, 
    value, 
    handleClick, 
    style
}) => {
    return (
    <button 
        type= "button" 
        className={classes}
        value={value}
        onClick={(e) => handleClick(e)}
        style={style}
        >{value}</button>
    )
}

export default Button ;