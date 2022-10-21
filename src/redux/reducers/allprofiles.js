import { createSlice } from "@reduxjs/toolkit";
import { getAllProfiles } from "../asyncActions/allprofiles";

const initialState = {
  value: {},
  isLoading: false,
};

const allprofile = createSlice({
  name: 'allprofile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllProfiles.pending, (state) => {
      state.isLoading = true
      state.value = {};
    });
    build.addCase(getAllProfiles.fulfilled, (state, action) => {
      state.isLoading = false
      state.value = { ...action.payload };
    });
  }
});

export { getAllProfiles };
export default allprofile.reducer;
export const { setValue } = allprofile.actions;