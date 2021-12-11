import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthenticatedAPI } from "../../../modules/api/api";


export const fetchTimelinePosts = createAsyncThunk(
    "post/fetchTimeline",
    async (thunkAPI) => {
        const API = useAuthenticatedAPI();
        
        const response = await API.get("/post/timeline/");
        return response;
    }
);