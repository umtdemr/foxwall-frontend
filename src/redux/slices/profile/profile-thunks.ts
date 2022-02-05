import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthenticatedAPI } from "../../../modules/api/api";
import { IUpdateProfile } from "../../../types/global/profile_types";


export const fetchProfile = createAsyncThunk(
    "profile/fetchProfile",
    async (username: string, thunkAPI ) => {
        const API = useAuthenticatedAPI();

        const response = await API.get(`/user/profile/${username}/`);
        return response;
    }
);

export const followProfile = createAsyncThunk(
    "profile/followProfile",
    async (username: string, thunkAPI) => {
        const API = useAuthenticatedAPI();

        const response = await API.post(`/follow/request/`, { username });
        return response;
    }
);

export const cancelFollowRequest = createAsyncThunk(
    "profile/cancelFollowRequest",
    async (username: string, thunkAPI) => {
        const API = useAuthenticatedAPI();
        const response = await API.post(`/follow/cancel-request/`, { username });
        return response;
    }
);





export const unfollowProfile = createAsyncThunk(
    "profile/unfollowProfile",
    async (username: string, thunkAPI) => {
        const API = useAuthenticatedAPI();
        const response = await API.post(`/follow/unfollow/`, { username });
        return response;
    }
);

export const updateProfile = createAsyncThunk(
    "profile/updateProfile",
    async (profileData: IUpdateProfile, thunkAPI) => {
        const API = useAuthenticatedAPI();
        const data = new FormData();
        if (profileData.username) data.append("username", profileData.username)
        if (profileData.name) data.append("name", profileData.name)
        if (profileData.bio) data.append("bio", profileData.bio)
        if (profileData.avatar) data.append("avatar", profileData.avatar)
        if (profileData.cover) data.append("cover", profileData.cover)

        const response = await API.patch("/user/me/", data);
        return response;
    }
)