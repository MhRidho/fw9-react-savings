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

export const editProfile = createAsyncThunk('/auth/profile', async ({ token, fullname, phonenumber, picture }) => {
  const result = {};
  try {
    const formData = new FormData();
    formData.append('picture', picture);
    formData.append('fullname', fullname);
    formData.append('phonenumber', phonenumber);
    // const send = qs.stringify({ fullname, phonenumber, picture }, { headers: { 'Content-Type': 'multipart/form-data' } })
    const { data } = await http(token).patch('/auth/profile', formData);
    result.successMsg = data.message;
    return result;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});

export const editProfilePhone = createAsyncThunk('/auth/phone', async ({ token, phonenumber }) => {
  const result = {};
  try {
    const send = qs.stringify({ phonenumber }, { headers: { 'Content-Type': 'multipart/form-data' } })
    const { data } = await http(token).patch('/auth/phone', send);
    result.successMsg = data.message;
    return result;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});