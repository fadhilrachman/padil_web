import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import IncomeSlice from "./IncomeSlice";
const rootReducer = combineReducers({
  Auth: AuthSlice,
  Income: IncomeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
