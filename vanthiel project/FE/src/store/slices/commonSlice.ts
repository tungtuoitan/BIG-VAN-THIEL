import { Common } from "@SRC/utils/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Common = {
  isUpdatePopupOpen: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleUpdatePopup: (state, action: PayloadAction<boolean>) => {
      state.isUpdatePopupOpen = action.payload;
    },
  },
});
export const { toggleUpdatePopup } = commonSlice.actions;
export default commonSlice.reducer;
