import { createSlice } from "@reduxjs/toolkit";

export const processes = createSlice({

    name:"processes",
    initialState:{
        num:"0",
        prevNum:0,
        presentNum:0,
        symbol:"",
        resultAppreance:[],
        clickable:true,

        chainingEqual:[],
        total:0,
    },
    reducers:{
        setNumber:(state,action) => {
            state.num==="0" ? 
            state.num=action.payload : 
            state.num+=action.payload
            
            state.presentNum=parseFloat(state.num)
            
            state.resultAppreance=[...state.resultAppreance,action.payload]
            
            
            state.clickable=true;
        },
        symbol:(state,action) => {
            if(state.clickable===true) {
                state.prevNum=parseInt(state.num)
                state.symbol=action.payload
                state.resultAppreance=[...state.resultAppreance,state.symbol]
                
                state.chainingEqual=[...state.chainingEqual,state.presentNum,state?.symbol]
                console.log(state.chainingEqual/* .reduce(function (param) {  }) */)
                
                state.num="0"
                state.clickable=false
            }
        },
        equal:(state) => {
            try {
                state.num= eval(state.prevNum+state.symbol+parseFloat(state.presentNum))
                state.total = parseFloat(state.num)
                state.resultAppreance=[state.num]

                state.chainingEqual=[...state.chainingEqual,state.presentNum]
                console.log(state.chainingEqual/* .reduce(function (param) {  }) */)
                
                console.log(state.chainingEqual.pop())
                if(state.chainingEqual.pop()=== "+"||"-"||"/"||"*") {
                    console.log("bu iş yürümze")
                }
                else {
                    console.log("ya allah")
                }
            }
            catch (error) {
                console.log(error)
                state.num=0
            }
        },
        restart:(state) => {
            state.num="0"
            state.prevNum=0
            state.presentNum=0
            state.symbol=""
            state.total=0
            state.resultAppreance=[]
        }
    },
},
)

export const {plus,restart,symbol,equal,setNumber} = processes.actions
export default processes.reducer