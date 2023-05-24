import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../utils";

const token = getToken();

export const getDataIncome = createAsyncThunk("/pemasukan", async () => {
  const result = await axios.get(`${process.env.REACT_APP_API}/pemasukan`, {
    headers: {
      Authorization: token,
    },
  });
  return result;
});

const IncomeSlice = createSlice({
  name: "pemasukan",
  initialState: {
    status: "",
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataIncome.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDataIncome.fulfilled, (state, action) => {
      state.status = "succes";
      state.data = action.payload.data.data;
    });
    builder.addCase(getDataIncome.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export default IncomeSlice.reducer;
