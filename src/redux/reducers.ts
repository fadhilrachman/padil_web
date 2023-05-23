import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
const rootReducer = combineReducers({
  Auth: AuthSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
