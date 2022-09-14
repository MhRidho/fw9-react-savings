import { createSlice } from '@reduxjs/toolkit';
import { transfer } from '../asyncActions/transfer';

const initialState = {
  value: 0,
  user_id: '',
  fullname: '',
  phonenumber: '',
  picture: '',
  date: '',
  notes: '',
  errorMsg: '',
  successMsg: '',
  type_id: 1
};

const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    editAmount: (state, action) => {
      state.value = parseInt(action.payload, 10)
    },
    notes: (state, action) => {
      state.notes = action.payload
    },
    editNameTransfer: (state, action) => {
      state.fullname = action.payload;
    },
    editPhoneTransfer: (state, action) => {
      state.phonenumber = action.payload;
    },
    editPictureTransfer: (state, action) => {
      state.picture = action.payload;
    },
    editTimeTransfer: (state, action) => {
      state.time = action.payload;
    },
    editUserIdTransfer: (state, action) => {
      state.user_id = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(transfer.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(transfer.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
  }
});

export { transfer };
export const { editAmount, notes, editNameTransfer, editPhoneTransfer, editPictureTransfer, editTimeTransfer, editUserIdTransfer } = transferSlice.actions;
export default transferSlice.reducer;