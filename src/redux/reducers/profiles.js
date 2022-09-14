import { createSlice } from "@reduxjs/toolkit";
import { getProfileLogin, getUserLogin } from "../asyncActions/profiles";

const initialState = {
  value: '',
  data: [],
  result: {},
  balance: []
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    balance: (state, action) => {
      state.balance = action.payload
    },
  },
  extraReducers: (build) => {
    build.addCase(getProfileLogin.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
    build.addCase(getUserLogin.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
  }
});

export { getProfileLogin, getUserLogin };
export default profile.reducer;