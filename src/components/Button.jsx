const Button = ({name})=>{
    return(
        <button className=" py-1 px-1.5 md:py-2 md:px-3 rounded-lg bg-gray-300 mx-1.5 cursor-pointer hover:bg-gray-400">{name}</button>
    )
}
export default Button;