import { createSlice } from '@reduxjs/toolkit';
import { topup } from '../asyncActions/topup';

const initialState = {
  amount: 0,
  user_id: '',
  fullname: '',
  phonenumber: '',
  picture: '',
  time: '',
  notes: 'Topup',
  errorMsg: '',
  successMsg: '',
  type_id: 1
};

const topupSlice = createSlice({
  name: 'topup',
  initialState,
  reducers: {
    editAmount: (state, action) => {
      state.amount = parseInt(action.payload, 10)
    },
    notes: (state, action) => {
      state.notes = action.payload
    },
    editTimeTopup: (state, action) => {
      state.time = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(topup.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(topup.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
  }
});

export { topup };
export const { editAmount, notes, editTimeTopup } = topupSlice.actions;
export default topupSlice.reducer;