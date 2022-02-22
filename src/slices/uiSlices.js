import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const uiSlices = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleLoader: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { toggleLoader } = uiSlices.actions;

export default uiSlices.reducer;
