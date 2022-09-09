import { createAsyncThunk } from "@reduxjs/toolkit";
import http from '../../helpers/http';
import qs from "qs";

export const getHistory = createAsyncThunk('/auth/historyTransactions', async (token) => {
  const results = {};
  try {
    const { data } = await http(token).get('/admin/transactions');
    results.data = data.result;
    return { ...data };
  }
  catch (e) {
    results.message = e.response.data?.message;
    return results;
  }
});