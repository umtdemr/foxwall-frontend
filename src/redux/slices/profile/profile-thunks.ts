import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthenticatedAPI } from "../../../modules/api/api";


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