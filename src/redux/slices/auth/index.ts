import { createSlice } from "@reduxjs/toolkit";

export interface IAuthSlice {
  isAuthenticated: boolean;
}

const initialState: IAuthSlice = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// export const {  } = authSlice.action return reducers

export default authSlice.reducer;
