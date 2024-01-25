import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    clearAuth: () => initialState,
  },
});

export const { userInfo, setUserInfo, clearAuth } = authSlice.actions;

export default authSlice.reducer;
