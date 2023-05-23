import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginInterface } from "../utils/interfaces/user";
import axios from "axios";

interface AuthState {
  status: string;
  data: any[]; // Ganti dengan tipe data yang sesuai
  errMessage: string | undefined | null | any;
}
export const signIn = createAsyncThunk(
  "/login",
  async (param: LoginInterface) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API}/login`,
      param
    );
    console.log({ result });

    return result;
  }
);
const initialState: AuthState = {
  status: "",
  data: [],
  errMessage: null,
};

const AuthSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.status = "loading";
      state.errMessage = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = "succes";
      state.errMessage = null;
      state.data = action.payload.data;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = "error";
      state.errMessage = action;
    });
  },
});

export default AuthSlice.reducer;
