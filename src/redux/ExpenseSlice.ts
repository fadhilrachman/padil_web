import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../utils";
import ExpenseInterface from "../utils/interfaces/expense";
const token = getToken();

export const getDataExpense = createAsyncThunk("/pengeluaran", async () => {
  const result = await axios.get(`${process.env.REACT_APP_API}/pengeluaran`, {
    headers: {
      Authorization: token,
    },
  });
  return result;
});
export const createDataExpense = createAsyncThunk(
  "/pengeluaran-create",
  async (val: ExpenseInterface) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API}/pengeluaran`,
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

export const deleteDataExpense = createAsyncThunk(
  "/pengeluaran-delete",
  async (id: string) => {
    const result = await axios.delete(
      `${process.env.REACT_APP_API}/pengeluaran/${id}`,
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
  name: "pengeluaran",
  initialState: {
    status: "",
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataExpense.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDataExpense.fulfilled, (state, action) => {
      state.status = "succes";
      state.data = action.payload.data.data;
    });
    builder.addCase(getDataExpense.rejected, (state, action) => {
      state.status = "error";
    });
    builder.addCase(createDataExpense.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createDataExpense.fulfilled, (state) => {
      state.status = "succes";
    });
    builder.addCase(createDataExpense.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(deleteDataExpense.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteDataExpense.fulfilled, (state) => {
      state.status = "succes";
    });
    builder.addCase(deleteDataExpense.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default IncomeSlice.reducer;
