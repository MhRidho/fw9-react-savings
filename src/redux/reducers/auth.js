import { createSlice } from '@reduxjs/toolkit';
import { login, register, pinregis } from '../asyncActions/auth';

const initialState = {
  token: localStorage.getItem('token') || null,
  errorMsg: null,
  successMsg: null,
  email: ''
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      return initialState;
    },
    editEmail: (state, action) => {
      state.email = action.payload
    }
  },
  extraReducers: (build) => {
    build.addCase(login.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.token;
      if (token) {
        state.token = token;
        localStorage.setItem('token', token);
      } else {
        state.errorMsg = action.payload?.errorMsg;
        state.successMsg = action.payload?.successMsg;
      }
    });
    build.addCase(register.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
    build.addCase(pinregis.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(pinregis.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
  }
});

export { login, register, pinregis };
export const { logout, editEmail } = auth.actions;
export default auth.reducer;