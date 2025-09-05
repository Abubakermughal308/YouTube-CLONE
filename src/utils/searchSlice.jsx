import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:[],
    reducers:{
    cache:(state,action)=>{
        const {searchText, data} = action.payload;
        state.push({searchText, data});
        // Optionally, you can limit the cache size
        if (state.length > 100) {
            state.shift(); // Remove the oldest entry if cache exceeds 100 items
        }
    }
    }
})
export const {cache} = searchSlice.actions;
export default searchSlice.reducer;