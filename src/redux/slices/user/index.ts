import { createSlice } from "@reduxjs/toolkit";

import { fetchCurrentUser } from "./user-thunks";


export interface IUserInitialState {
    email?: string;
    username?: string;
    name?: string;
    avatar?: string;
    bio?: string;
    cover?: string;
    is_celebrity?: boolean;
    is_hidden?: boolean;
}

const initialState: IUserInitialState = {
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
            const data = action.payload.data;
            state.email = data.email;
            state.username = data.username;
            state.name = data.name;
            state.bio = data.bio;
            state.is_celebrity = data.is_celebrity;
            state.cover = `${process.env.REACT_APP_API_URL}${data.cover}`;
            state.avatar = `${process.env.REACT_APP_API_URL}${data.avatar}`;
        })
    },
});



export default userSlice.reducer;