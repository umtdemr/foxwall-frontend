import { createSlice } from "@reduxjs/toolkit";

import { loginThunk, registerThunk } from "./auth-thunks";

export interface IAuthSlice {
  isAuthenticated: boolean;
}

const initialState: IAuthSlice = {
  isAuthenticated: false,  // during designing this should be true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      // state.isAuthenticated = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      console.log(state, action);
      console.log(action!.payload!.data.token);
      // state.isAuthenticated = true;
    });
  },
});

// export const {  } = authSlice.action return reducers

export default authSlice.reducer;
