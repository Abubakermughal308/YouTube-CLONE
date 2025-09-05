import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.unshift(action.payload);
      state.splice(20, 1);
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
