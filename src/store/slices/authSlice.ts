import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  user: IUser | null;
  token: string | null;
}

export interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  avatar: string;
  email: string;
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
  token: null,
};

export const authSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    authSuccess: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>
    ) => {
      state.isAuth = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    authLogOut: (state) => {
      state.isAuth = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { authSuccess, authLogOut } = authSlide.actions;

const authRecuder = authSlide.reducer;
export default authRecuder;
