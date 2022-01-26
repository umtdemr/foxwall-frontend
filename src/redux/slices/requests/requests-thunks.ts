import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthenticatedAPI } from "../../../modules/api/api";


export const fetchReceivedRequests = createAsyncThunk(
    "requests/fetchReceivedRequests",
    async (thunkAPI) => {
        const API = useAuthenticatedAPI();

        const response = await API.get("/follow/received-requests");
        return response;
    }
)
