import { createAsyncThunk } from "@reduxjs/toolkit";
import http from '../../helpers/http';

export const getProfile = createAsyncThunk('profile/getProfile', async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get('/profile');
    return data;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});

console.log(getProfile);