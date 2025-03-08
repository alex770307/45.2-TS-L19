import { createSlice } from '@reduxjs/toolkit';
import { loginAction, loginToken } from "./authAction";

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken:string;
}

interface IAuthState {
  user: IUser,
  isLoading: boolean,
  error: string
}

const initialUser: IUser = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  accessToken: "",
  refreshToken: ""
}

const initialState: IAuthState = {
  user:initialUser,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false
        state.user = initialUser
        state.error = action.payload as string
      })
      .addCase(loginToken.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
      })
  },
});

export default authSlice;
// export const { } = authSlice.actions