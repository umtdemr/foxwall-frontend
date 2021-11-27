import { createAsyncThunk } from "@reduxjs/toolkit";

import API from "../../../modules/api/api";


export const registerThunk = createAsyncThunk(
    'auth/postRegister',
    async (thunkAPI) => {
        const response = await API.post("/user/register/", {});  // add multipart form data support
        return response;
    }
);
