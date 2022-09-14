import { createAsyncThunk } from "@reduxjs/toolkit";
import http from '../../helpers/http';

export const getAllProfiles = createAsyncThunk('/admin/profiles', async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get('/admin/profiles');
    return data;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});