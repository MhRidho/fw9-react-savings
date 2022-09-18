import { createSlice } from "@reduxjs/toolkit";
import { editProfile, editProfilePhone, getProfileLogin, getUserLogin } from "../asyncActions/profiles";

const initialState = {
  value: '',
  data: [],
  result: {},
  balance: [],
  successMsg: ''
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
    build.addCase(editProfile.pending, (state) => {
      state.data = null;
      state.successMsg = null;
    });
    build.addCase(editProfile.fulfilled, (state, action) => {
      state.data = action.payload.results;
      state.successMsg = action.payload?.successMsg;
    });
    build.addCase(editProfilePhone.pending, (state) => {
      state.data = null;
      state.successMsg = null;
    });
    build.addCase(editProfilePhone.fulfilled, (state, action) => {
      state.data = action.payload.results;
      state.successMsg = action.payload?.successMsg;
    });
  }
});

export { getProfileLogin, getUserLogin, editProfile, editProfilePhone };
export default profile.reducer;