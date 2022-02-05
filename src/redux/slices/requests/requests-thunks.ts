import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthenticatedAPI } from "../../../modules/api/api";
import { ICameFollowRequestAction } from "../../../types/global/profile_types";


export const fetchReceivedRequests = createAsyncThunk(
    "requests/fetchReceivedRequests",
    async (thunkAPI) => {
        const API = useAuthenticatedAPI();

        const response = await API.get("/follow/received-requests");
        return response;
    }
)

export const cameFollowRequestAction = createAsyncThunk(
    "requests/cameFollowAction",
    async (followData: ICameFollowRequestAction, thunkAPI) => {
        const API = useAuthenticatedAPI();
        const apiUrl = followData.accept ? '/follow/allow-follow-request/' : '/follow/reject-follow-request/';
        const response = await API.post(apiUrl, { username: followData.username });
        
        return response;
    }
) 