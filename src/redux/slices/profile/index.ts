import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../../../types/global/profile_types";
import { fetchProfile } from "./profile-thunks";


export interface IProfileInitialState extends Partial<UserProfile>{
    loading: boolean;
    error: string;
}


const initialState: IProfileInitialState = {
    loading: true,
    error: '',
    profile: {
        name: '',
        avatar: '',
        cover: '',
        is_celebrity: false,
        is_hidden: false,
    },
}


const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProfile.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchProfile.fulfilled, (state, action) => {
            const data = action.payload.data;
            state.loading = false;
            state.id = data.id;
            state.email = data.email;
            state.username = data.username;
            state.is_came_follow_request = data.is_came_follow_request;
            state.is_followed_me = data.is_followed_me;
            state.is_following =data.is_following;
            state.is_sent_follow_request = data.is_sent_follow_request;
            state.profile!.avatar = data.profile.avatar;
            state.profile!.cover = data.profile.cover;
            state.profile!.name = data.profile.name;
            state.profile!.bio = data.profile.bio;
            state.profile!.is_hidden = data.profile.is_hidden;
            state.profile!.is_celebrity = data.profile.is_celebrity;
        });
    },
});


export default profileSlice.reducer;