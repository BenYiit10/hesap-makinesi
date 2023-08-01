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
        clickAgain:false,

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

            if (state.clickAgain===true) {
                state.chainingEqual.splice(0,1)
                console.log(state.chainingEqual)
            }
            state.clickAgain=false
        },


        symbol:(state,action) => {
            if(state.clickable===true) {
                state.prevNum=parseInt(state.num)
                state.symbol=action.payload
                state.resultAppreance=[...state.resultAppreance,state.symbol]
                
                state.chainingEqual=[...state.chainingEqual,state.presentNum,state?.symbol]
                console.log(state.chainingEqual)
                
                state.num="0"
                state.clickable=false

                if (typeof state.chainingEqual[0] == "number" && typeof state.chainingEqual[1] == "number") {
                    state.chainingEqual.splice(1,1)
                }
                state.clickAgain=false
            }
        },


        equal:(state) => {
            if (state.clickable===true) {
                try {
                    
                    // eslint-disable-next-line
                    state.num= eval(state.prevNum+state.symbol+parseFloat(state.presentNum))
                    state.total = parseFloat(state.num)
                    state.resultAppreance=[state.num]
    
                    state.chainingEqual=[...state.chainingEqual,state.presentNum]
                    console.log(state.chainingEqual)
                    
                    let stringForEval = ""
                    state.chainingEqual.forEach((item) => {
                        stringForEval+=item
                    })

                    // eslint-disable-next-line
                    state.num=eval(stringForEval)
                    state.resultAppreance=[state.num]
                }
                catch (error) {
                    console.log(error)
                    state.num=0
                }
            }
            else {
                try {
                    // eslint-disable-next-line
                    state.num= eval(state.prevNum+state.symbol+parseFloat(state.presentNum))
                    state.total = parseFloat(state.num)
                    state.resultAppreance=[state.num]
    
                    state.chainingEqual=[...state.chainingEqual,state.presentNum]
                    
                    let stringForEval = ""
                    let chainingEqualSliced = state.chainingEqual.slice(0, -1)
                    chainingEqualSliced.forEach((item) => {
                        stringForEval+=item
                    })

                    // eslint-disable-next-line
                    state.num=eval(stringForEval)
                    state.resultAppreance=[state.num]
                }
                catch (error) {
                    console.log(error)
                    state.num=0
                }
            }
            state.chainingEqual=[state.num]
            state.clickAgain=true
        },


        restart:(state) => {
            state.num="0"
            state.prevNum=0
            state.presentNum=0
            state.symbol=""
            state.total=0
            state.resultAppreance=[]
            state.chainingEqual=[]
        }
    },
},
)

export const {plus,restart,symbol,equal,setNumber} = processes.actions
export default processes.reducer