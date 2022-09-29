import { createAsyncThunk } from "@reduxjs/toolkit";
import http from '../../helpers/http';

export const getAllProfiles = createAsyncThunk('/admin/profiles', async ({ token, limit, page }) => {
  const result = {};
  limit = parseInt(limit) || 5;
  page = parseInt(page) || 1;
  const query = new URLSearchParams({ limit, page }).toString()
  try {
    const { data } = await http(token).get('/admin/profiles?' + query);
    return data;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});