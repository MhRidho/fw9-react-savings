import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from 'qs';
import http from '../../helpers/http';

export const topup = createAsyncThunk('auth/topup', async ({ token, request }) => {
  const result = {}
  try {
    const send = qs.stringify(request)
    const { data } = await http(token).post('auth/topup', send, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
    result.successMsg = data.message;
    return result;
  } catch (e) {
    // eslint-disable-next-line no-undef
    result.message = e.response.data?.message;
    return result;
  }
})