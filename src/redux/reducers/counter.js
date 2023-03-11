import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0
};

export const counterSLice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    customValue: (state, action) => {
      state.value = parseInt(action.payload, 10)
    }
  }
});

export const { increment, decrement, customValue } = counterSLice.actions;

export default counterSLice.reducer;