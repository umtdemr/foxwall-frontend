import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthenticatedAPI } from "../../../modules/api/api";


interface PostData {
    text?: string;
}


export const fetchTimelinePosts = createAsyncThunk(
    "post/fetchTimeline",
    async (thunkAPI) => {
        const API = useAuthenticatedAPI();
        
        const response = await API.get("/post/timeline/");
        return response;
    }
);


export const fetchProfilePosts = createAsyncThunk(
    "post/fetchProfile",
    async (username: string, thunkAPI) => {
        const API = useAuthenticatedAPI();

        const response = await API.get(`/user/profile/${username}/posts/`);
        return response;
    }
);

export const createPost = createAsyncThunk(
    "post/createPost",
    async (postData: PostData, thunkAPI) => {
        const API = useAuthenticatedAPI(
            {
                headers: {
                    'content-type': 'multipart/form-data; boundary=63c5979328c44e2c869349443a94200e',
                },
            }
        );
        
        const data = new FormData();
        data.append("text", postData.text!);

        const response = await API.post(
            "/post/create/",
            data
        );
        return response;
    }
)