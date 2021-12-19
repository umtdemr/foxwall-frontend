import { createSlice } from "@reduxjs/toolkit";
import { GlobalPost } from "../../../types/global/post_types";
import { createPost, fetchTimelinePosts } from "./post-thunks";



export interface IPostInitialState {
    fetch: {
        loading: boolean;
        error: string;
        count?: number,
        results: GlobalPost[] | [],
    },
    create: {
        loading: boolean;
    }
}


const initialState: IPostInitialState = {
    fetch: {
        loading: true,
        error: "",
        results: [],
    },
    create: {
        loading: false,
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


        builder.addCase(createPost.pending, (state, action) => {
            state.create.loading = true;
        });
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.create.loading = false;
        });

        // TODO Add rejected builder

    },
});

export default postSlice.reducer;