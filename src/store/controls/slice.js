import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  someProperty: "some initial value",
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {},
});

export const {
  //put reducers here//
} = controlsSlice.actions;
export default controlsSlice.reducer;
