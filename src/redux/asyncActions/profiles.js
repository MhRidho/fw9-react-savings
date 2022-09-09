import { createAsyncThunk } from "@reduxjs/toolkit";
import http from '../../helpers/http';
import qs from "qs";

export const getProfileLogin = createAsyncThunk('/auth/profiles', async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get('/auth/profiles');
    return data;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});

export const getUserLogin = createAsyncThunk('/auth/users', async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get('/auth/users');
    return data;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});

export const editProfile = createAsyncThunk('/auth/profile', async ({ token, fullname, picture }) => {
  const result = {};
  try {
    const profilePicture = new FormData();
    profilePicture.append('file', picture);
    const send = qs.stringify({ fullname, picture }, { headers: { 'Content-Type': 'multipart/form-data' } })
    const { data } = await http(token).patch('/auth/profile', send);
    result.successMsg = data.message;
    return result;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});