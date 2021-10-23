import { createSlice } from "@reduxjs/toolkit";

export interface ILayoutState {
  isSearchPopupOpen: boolean;
}

const initialState: ILayoutState = {
  isSearchPopupOpen: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSearchPopup(state) {
      state.isSearchPopupOpen = !state.isSearchPopupOpen;
    },
  },
});

export const { toggleSearchPopup } = layoutSlice.actions;

export default layoutSlice.reducer;
