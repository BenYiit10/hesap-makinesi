import { useDispatch } from "react-redux"
import { symbol} from "../Redux/Reducer"


export  default function Process({children,...props}) {
    
    //const {process} = props.process
    const dispatch = useDispatch()
    
    return (
        <div className="cursor-pointer" onClick={() => {
            dispatch(symbol(props.process))
        }} {...props}>
            {children}
        </div>    
    )
}
