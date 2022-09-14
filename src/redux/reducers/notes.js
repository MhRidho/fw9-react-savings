import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  notes: ''
};

export const counterSLice = createSlice({
  name: "notes",
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
    },
    customNotes: (state, action) => {
      state.notes = action.payload
    }
  }
});

export const { increment, decrement, customValue, customNotes } = counterSLice.actions;

export default counterSLice.reducer;