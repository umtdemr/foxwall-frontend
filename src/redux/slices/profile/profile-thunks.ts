import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthenticatedAPI } from "../../../modules/api/api";
import { ICameFollowRequestAction } from "../../../types/global/profile_types";


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


export const cameFollowRequestAction = createAsyncThunk(
    "profile/cameFollowAction",
    async (followData: ICameFollowRequestAction, thunkAPI) => {
        const API = useAuthenticatedAPI();
        const apiUrl = followData.accept ? '/follow/allow-follow-request/' : '/follow/reject-follow-request/';
        const response = await API.post(apiUrl, { username: followData.username });
        
        return response;
    }
) 


export const unfollowProfile = createAsyncThunk(
    "profile/unfollowProfile",
    async (username: string, thunkAPI) => {
        const API = useAuthenticatedAPI();
        const response = await API.post(`/follow/unfollow/`, { username });
        return response;
    }
);