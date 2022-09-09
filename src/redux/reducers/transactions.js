import { createSlice } from "@reduxjs/toolkit";
import { getHistory } from "../asyncActions/transactions";

const initialState = {
  value: {}
};

const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getHistory.pending, (state) => {
      state.value = {};
    });
    build.addCase(getHistory.fulfilled, (state, action) => {
      state.value = { ...action.payload };
    });
  }
});

export { getHistory };
export default transaction.reducer;