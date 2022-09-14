import { createSlice } from "@reduxjs/toolkit";
import { getAllProfiles } from "../asyncActions/allprofiles";

const initialState = {
  value: {}
};

const allprofile = createSlice({
  name: 'allprofile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllProfiles.pending, (state) => {
      state.value = {};
    });
    build.addCase(getAllProfiles.fulfilled, (state, action) => {
      state.value = { ...action.payload };
    });
  }
});

export { getAllProfiles };
export default allprofile.reducer;