import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthenticatedAPI } from "../../../modules/api/api";


export const fetchCurrentUser = createAsyncThunk(
    "user/fetchCurrentUser",
    async (thunkAPI) => {
        const API = useAuthenticatedAPI();

        const response = await API.get("/user/me/");
        return response;
    }
);

