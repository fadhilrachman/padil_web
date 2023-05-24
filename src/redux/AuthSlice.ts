import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from "@reduxjs/toolkit";
import { LoginInterface, RegisterInterface } from "../utils/interfaces/user";
import axios, { AxiosError } from "axios";
import { getToken } from "../utils";

interface ResponLogin {
  token: string;
  message?: string;
}

interface AuthState {
  statusLogin: string;
  statusRegister: string;
  data: ResponLogin; // Ganti dengan tipe data yang sesuai
  errMessage: string | undefined | null | any;
}

const token = getToken();
export const signIn = createAsyncThunk(
  "/login",
  async (param: LoginInterface, { rejectWithValue }) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API}/login`,
        param
      );
      return result;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const signUp = createAsyncThunk(
  "/register",
  async (param: RegisterInterface, { rejectWithValue }) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API}/register`,
        param
      );
      return result;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("/logout", async () => {
  const result = await axios.post(
    `${process.env.REACT_APP_API}/logout`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return result;
});
const initialState: AuthState = {
  statusLogin: "",
  statusRegister: "",
  data: { token: "" },
  errMessage: null,
};

const AuthSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.statusLogin = "loading";
      state.errMessage = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.statusLogin = "succes";
      state.errMessage = null;
      state.data = action.payload.data;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.statusLogin = "error";
      state.errMessage = action.payload;
    });
    builder.addCase(signUp.pending, (state) => {
      state.statusRegister = "loading";
      state.errMessage = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.statusRegister = "succes";
      state.errMessage = null;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.statusRegister = "error";
      state.errMessage = action.payload;
    });
    builder.addCase(logout.pending, (state) => {
      state.statusLogin = "loading";
      state.errMessage = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.statusLogin = "succes";
      state.errMessage = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.statusLogin = "error";
      state.errMessage = action.payload;
    });
  },
});

export default AuthSlice.reducer;
