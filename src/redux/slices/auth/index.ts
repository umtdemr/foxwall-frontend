import { createSlice } from "@reduxjs/toolkit";

import { loginThunk, registerThunk } from "./auth-thunks";

export interface IAuthSlice {
  user: {
    username?: string;
    email?: string;
    token?: string;
  };
  isAuthenticated: boolean;
  register?: {
    loading: boolean;
    erorr: boolean;
    errorMessage?: boolean;
  };
  login: {
    loading: boolean;
    erorr: boolean;
    errorMessage?: string;
  }
}

const initialState: IAuthSlice = {
  isAuthenticated: false,  // during designing this should be true
  user: {},
  login: {
    loading: false,
    erorr: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      // state.isAuthenticated = true;
    });
    builder.addCase(loginThunk.pending, (state, action) => {
      state.login!.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.login.loading = false;
      state.login.errorMessage = "";
      state.user.token = action?.payload?.data.token;
      state.user.username = action?.payload?.data.username;
      state.user.email = action?.payload?.data.email;
    });
  },
});

// export const {  } = authSlice.action return reducers

export default authSlice.reducer;
