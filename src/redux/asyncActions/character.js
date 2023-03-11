import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAll = createAsyncThunk("character/getAll", async (nextUrl) => {
  const url = nextUrl || "https://rickandmortyapi.com/api/character";
  const { data } = await axios.get(url);
  return data;
});