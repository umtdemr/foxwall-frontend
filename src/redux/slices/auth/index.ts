import { createSlice } from "@reduxjs/toolkit";

export interface IAuthSlice {
  isAuthenticated: boolean;
}

const initialState: IAuthSlice = {
  isAuthenticated: true,  // during designing this should be true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// export const {  } = authSlice.action return reducers

export default authSlice.reducer;
