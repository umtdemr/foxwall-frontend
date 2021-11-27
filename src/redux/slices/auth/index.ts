import { createSlice } from "@reduxjs/toolkit";

import { registerThunk } from "./auth-thunks";

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
      state.isAuthenticated = true;
    })
  },
});

// export const {  } = authSlice.action return reducers

export default authSlice.reducer;
