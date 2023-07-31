import { useDispatch } from "react-redux"
import { setNumber } from "../Redux/Reducer"


export default function Clicked({children}) {
    
    const dispatch = useDispatch()
    let value = "";
    function handleClick() {
        value += children
        dispatch(setNumber(value))
    }

    return (
        <div onClick={handleClick} className="cursor-pointer">
            {children}
        </div>    
    )
}
