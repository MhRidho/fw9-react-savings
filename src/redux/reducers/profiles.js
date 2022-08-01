import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "../asyncActions/profiles";

const initialState = {
  result: {}
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
  }
});

console.log(getProfile);
console.log(profile.reducer);

export { getProfile };
export default profile.reducer;