import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthenticatedAPI } from "../../../modules/api/api";


export const fetchProfile = createAsyncThunk(
    "profile/fetchProfile",
    async (username: string, thunkAPI ) => {
        const API = useAuthenticatedAPI();

        const response = await API.get(`/user/profile/${username}/`);
        return response;
    }
)