import { createAsyncThunk } from "@reduxjs/toolkit";
import http from '../../helpers/http';

export const getHistory = createAsyncThunk('/auth/historyTransactions', async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get('/auth/historyTransactions');
    return data;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});