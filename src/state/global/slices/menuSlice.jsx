import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checked: false,
  mouseIn: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    updateCheck(state, action) {
      console.log(`update check to ${(typeof action, JSON.stringify(action))}`);
      state.checked = action.payload;
    },

    updateMouseIn(state, action) {
      state.mouseIn = action.payload;
    },
  },
});

export const { updateCheck, updateMouseIn } = menuSlice.actions;

export default menuSlice.reducer;
