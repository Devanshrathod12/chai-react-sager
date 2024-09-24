import {createSlice} from "@reduxjs/toolkit"

export  const obj = createSlice({
  name:"counter",
  initialState:0,
  reducers:{
    increase:(state)=>{
      return state+2;
    },
    decrease:(state)=>{
      return state-2;
    }
  }
})

export const {increase,decrease} = obj.actions
export default obj.reducer