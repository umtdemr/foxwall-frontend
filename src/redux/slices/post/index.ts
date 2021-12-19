import { createSlice } from "@reduxjs/toolkit";
import { GlobalPost } from "../../../types/global/post_types";
import { fetchTimelinePosts } from "./post-thunks";



export interface IPostInitialState {
    fetch: {
        loading: boolean;
        error: string;
        count?: number,
        results: GlobalPost[] | [],
    }
}


const initialState: IPostInitialState = {
    fetch: {
        loading: true,
        error: "",
        results: [],
    },
}


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTimelinePosts.pending, (state, action) => {
            state.fetch.loading = true;
            state.fetch.error = "";
        });
        builder.addCase(fetchTimelinePosts.fulfilled, (state, action) => {
            state.fetch.loading = false;
            state.fetch.count = action.payload.data.count;
            state.fetch.results = action.payload.data.results;
            state.fetch.error = "";
        });
        builder.addCase(fetchTimelinePosts.rejected, (state, action) => {
            state.fetch.loading = false;
            state.fetch.error = "An error occurred during fetching post data...";
        });
    },
});

export default postSlice.reducer;