import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from 'qs';
import http from '../../helpers/http';

export const transfer = createAsyncThunk('auth/transfer', async ({ token, amount, recipient_id, notes, time, type_id, pin }) => {
  const result = {}
  try {
    const send = qs.stringify({ amount, recipient_id, notes, time, type_id, pin })
    const { data } = await http(token).post('auth/transfer', send, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
    result.successMsg = data.message;
    return result;
  } catch (e) {
    // eslint-disable-next-line no-undef
    result.message = e.response.data?.message;
    return result;
  }
})