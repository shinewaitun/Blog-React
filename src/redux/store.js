import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./system/systemSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    system: systemReducer,
    auth: authReducer,
  },
});
