import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Infor {
  name?: string | null;
  email: string | null;
  password: string | null;
}

export interface Profile {
  isLogged: boolean;
  infor: Infor;
}

const initInfor: Infor = {
  name: "Tung Le Hoang",
  email: "hoanhtungle@gmail.com",
  password: "123456",
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
      const newProfile: Profile = {
        ...state,
        isLogged: action.payload,
      };
      state = newProfile;
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
