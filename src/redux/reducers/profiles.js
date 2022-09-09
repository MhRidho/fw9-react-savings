import { createSlice } from "@reduxjs/toolkit";
import { getProfileLogin, getUserLogin } from "../asyncActions/profiles";

const initialState = {
  data: [],
  result: {}
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
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