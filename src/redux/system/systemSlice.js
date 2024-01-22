import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSidebar: "",
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setActiveSidebar: (state, action) => {
      state.activeSidebar = action.payload;
    },
  },
});

export const { activeSidebar, setActiveSidebar } = systemSlice.actions;

export default systemSlice.reducer;
