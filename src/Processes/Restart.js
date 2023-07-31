import { useDispatch } from "react-redux"
import { restart } from "../Redux/Reducer"

export  default function Restart({children}) {
    
    const dispatch = useDispatch()
    
    return (
        <div onClick={()=> dispatch(restart())} className='!bg-[#9f9f9f] cursor-pointer'>
            {children}
        </div>    
    )
}
