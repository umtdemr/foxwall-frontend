import { createSlice } from "@reduxjs/toolkit";
import { GlobalPost } from "../../../types/global/post_types";
import { fetchTimelinePosts } from "./post-thunks";



export interface IPostInitialState {
    loading: boolean;
    error: string;
    count?: number,
    results: GlobalPost[] | [],
}


const initialState: IPostInitialState = {
    loading: true,
    error: "",
    results: [],
}


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTimelinePosts.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchTimelinePosts.fulfilled, (state, action) => {
            state.loading = false;
            state.count = action.payload.data.count;
            state.results = action.payload.data.results;
            state.error = "";
        });
        builder.addCase(fetchTimelinePosts.rejected, (state, action) => {
            state.loading = false;
            state.error = "An error occurred during fetching post data...";
        });
    },
});

export default postSlice.reducer;