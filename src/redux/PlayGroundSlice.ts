import { createSlice } from "@reduxjs/toolkit";

const plagroundSlice = createSlice({
  name: "playground",
  initialState: {
    number: 1,
  },
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number += 1;
    },
  },
});

export default plagroundSlice.reducer;
