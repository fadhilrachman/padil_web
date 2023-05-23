import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./redux/AuthSlice";
import RootState from "./redux/reducers";
const store = configureStore({
  reducer: RootState,
});

export default store;
