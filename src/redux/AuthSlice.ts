import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginInterface } from "../utils/interfaces/user";
import axios from "axios";

interface AuthState {
  status: string;
  data: any[]; // Ganti dengan tipe data yang sesuai
}
export const login = createAsyncThunk(
  "/auth-login",
  async (param: LoginInterface) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API}/login`,
      param
    );
    return result.data;
  }
);

const AuthSlice = createSlice({
  name: "test",
  initialState: {
    status: "",
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "succes";
      state.data = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default AuthSlice.reducer;
