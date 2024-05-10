import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, actions) => {
      return actions.payload;
    },
  },
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice;
