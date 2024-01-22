import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "src/redux/system/systemSlice";

export const store = configureStore({
  reducer: {
    system: systemReducer,
  },
});
