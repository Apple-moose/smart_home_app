import { configureStore } from "@reduxjs/toolkit";
import controlsReducer from "./controls/slice";

const store = configureStore({
  reducer: {
    controls: controlsReducer,
  },
});

export default store;
