import { createAsyncThunk } from "@reduxjs/toolkit";

import { useAPI } from "../../../modules/api/api";

import { IRegisterForm } from "../../../types/api/auth";


export const registerThunk = createAsyncThunk(
    'auth/postRegister',
    async (data: IRegisterForm, thunkAPI) => {
        const API = useAPI({
            headers: {
                'content-type': 'multipart/form-data; boundary=63c5979328c44e2c869349443a94200e',
            },
        });

        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("name", data.name);
        formData.append("password", data.password);
        if (data.username !== "") {
            formData.append("username", data.username!);
        }
        
        const response = await API.post("/user/register/", formData);  // add multipart form data support
        return response;
    }
);
