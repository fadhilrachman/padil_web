import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import IncomeSlice from "./IncomeSlice";
import ExpenseSlice from "./ExpenseSlice";
const rootReducer = combineReducers({
  Auth: AuthSlice,
  Income: IncomeSlice,
  Expense: ExpenseSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
