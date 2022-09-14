import { createSlice } from '@reduxjs/toolkit';
import { transfer } from '../asyncActions/transfer';

const initialState = {
  recipient_id: '',
  fullname: '',
  phonenumber: '',
  picture: '',
  time: '',
  errorMsg: '',
  successMsg: ''
};

const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
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
    editRecipientTransfer: (state, action) => {
      state.recipient_id = action.payload;
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
export const { editNameTransfer, editPhoneTransfer, editPictureTransfer, editTimeTransfer, editRecipientTransfer } = transferSlice.actions;
export default transferSlice.reducer;