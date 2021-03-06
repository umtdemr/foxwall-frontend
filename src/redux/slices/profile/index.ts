import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "../../../types/global/profile_types";
import { cancelFollowRequest, fetchProfile, followProfile, unfollowProfile } from "./profile-thunks";


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
    reducers: {
        changeIsCameFollowRequest: (state, action: PayloadAction<{isCameIssue: boolean}>) => {
            state.is_came_follow_request = action.payload.isCameIssue;
        },
        setProfileEmpty: (state) => {
            state = initialState;
        },
    },
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
            state.follower_count = data.follower_count;
            state.follows_count = data.follows_count;
        });


        builder.addCase(followProfile.fulfilled, (state, action) => {
            state.is_sent_follow_request = true;
        });
        builder.addCase(cancelFollowRequest.fulfilled, (state, action) => {
            state.is_sent_follow_request = false;
        });
        builder.addCase(unfollowProfile.fulfilled, (state, action) => {
            state.is_following = false;
        });

    },
});


export const { 
    changeIsCameFollowRequest,
    setProfileEmpty,
} = profileSlice.actions;


export default profileSlice.reducer;