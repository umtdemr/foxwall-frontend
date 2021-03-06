import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { loginThunk, registerThunk } from "./auth-thunks";

export interface IAuthSlice {
  user: {
    username?: string;
    email?: string;
    token?: string;
  };
  isAuthenticated: boolean;
  message: {
    show: boolean;
    content?: string;
    severity?: 'success' | 'error' | 'warning' | 'info',
  },
}


const initialState: IAuthSlice = {
  isAuthenticated: true,  // during designing this should be true
  user: {},
  message: {
    show: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    syncAuth: (state, action: PayloadAction<{isAuthenticated: boolean, token?: string}>) => {
      if (action.payload.isAuthenticated) {
        state.isAuthenticated = true;
        state.user.token = action.payload.token;
      } else {
        state.isAuthenticated = false;
        state.user.token = "";
      }
    },
    removeMessage: (state) => {
      state.message.show = false;
      state.message.content = '';
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user.token = "";
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.message.show = true;
      state.message.content = "Error during registiration";
      state.message.severity = "error";
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.message.show = true;
      state.message.content = "Register success! Please login";
      state.message.severity = "success";
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user.token = action?.payload?.data.token;
      state.user.username = action?.payload?.data.username;
      state.user.email = action?.payload?.data.email;
      state.message.show = false;
      state.message.content = "";

      localStorage.setItem("token", action?.payload?.data.token);
    });
    builder.addCase(loginThunk.rejected, (state, action: any) => {
      state.message.show = true;
      action.payload.status === 401 
      ? state.message.content = "Invalid Credentials"
      : state.message.content = "Error during logging in"
      state.message.severity = "error";
    });
  },
});

export const { 
  syncAuth,
  removeMessage,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
