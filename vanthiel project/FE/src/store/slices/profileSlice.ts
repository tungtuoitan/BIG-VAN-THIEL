import { Infor, Profile } from "@SRC/utils/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initInfor: Infor = {
  name: null,
  email: null,
  password: null,
};

const initialState: Profile = {
  isLogged: false,
  infor: initInfor,
};

const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    updateIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    updateInfor: (state, action: PayloadAction<[keyof Infor, string]>) => {
      const newInformation: Infor = {
        ...state.infor,
        [action.payload[0]]: action.payload[1],
      };
      state.infor = newInformation;
    },
    resetProfile: (state) => {
      state.isLogged = false;
      state.infor = initInfor;
    },
  },
});
export const { updateInfor, updateIsLogged, resetProfile } =
  profileSlice.actions;
export default profileSlice.reducer;
