import { useDispatch } from "react-redux"
import { equal } from "../Redux/Reducer"

export  default function Equal({children}) {

    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(equal())} className='equal !bg-[#f69a06] !text-[38px]  cursor-pointer'>
            {children}
        </div>    
    )
}