import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../utils";
import IncomeInterface from "../utils/interfaces/income";
const token = getToken();

export const getDataIncome = createAsyncThunk("/pemasukan", async () => {
  const result = await axios.get(`${process.env.REACT_APP_API}/pemasukan`, {
    headers: {
      Authorization: token,
    },
  });
  return result;
});
export const createDataIncome = createAsyncThunk(
  "/pemasukan-create",
  async (val: IncomeInterface) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API}/pemasukan`,
      val,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return result;
  }
);

export const deleteDataIncome = createAsyncThunk(
  "/pemasukan-delete",
  async (id: string) => {
    const result = await axios.delete(
      `${process.env.REACT_APP_API}/pemasukan/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return result;
  }
);

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
    builder.addCase(createDataIncome.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createDataIncome.fulfilled, (state) => {
      state.status = "succes";
    });
    builder.addCase(createDataIncome.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(deleteDataIncome.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteDataIncome.fulfilled, (state) => {
      state.status = "succes";
    });
    builder.addCase(deleteDataIncome.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default IncomeSlice.reducer;
