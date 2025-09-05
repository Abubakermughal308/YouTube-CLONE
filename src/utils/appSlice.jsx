import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        toggleValue:true
    },
    reducers:{
        toggleSideBar:(state,action)=>{
            state.toggleValue = !state.toggleValue
        },
        setToggleValue:(state,action)=>{
            state.toggleValue = false;
        }
    }
})
export const {toggleSideBar ,setToggleValue}=appSlice.actions;
export default appSlice.reducer;