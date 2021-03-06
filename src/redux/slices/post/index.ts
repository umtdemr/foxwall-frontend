import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalPost } from "../../../types/global/post_types";
import { createPost, deletePost, fetchProfilePosts, fetchTimelinePosts } from "./post-thunks";


export interface IFetchPostData {
    loading: boolean;
    error: string;
    count?: number,
    results: GlobalPost[] | [],
}

export interface IPostInitialState {
    fetch: IFetchPostData,
    create: {
        loading: boolean;
    },
    profile: IFetchPostData,
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
    profile: {
        loading: false,
        error: "",
        results: [],
    },
}


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<GlobalPost>) => {
            state.fetch.results = [action.payload, ...state.fetch.results];
        },
        setProfilePostEmpty: (state) => {
            state.profile.loading = false;
            state.profile.error = "";
            state.profile.results = [];
        },
    },
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


        builder.addCase(fetchProfilePosts.pending, (state, action) => {
            state.profile.loading = true;
        });
        builder.addCase(fetchProfilePosts.fulfilled, (state, action) => {
            state.profile.loading = false;
            state.profile.count = action.payload.data.count;
            state.profile.results = action.payload.data.results;
            state.profile.error = "";
        });
        builder.addCase(fetchProfilePosts.rejected, (state, action) => {
            state.profile.loading = false;
            state.profile.error = "An error occurred during fetching post data...";
        });


        builder.addCase(createPost.pending, (state, action) => {
            state.create.loading = true;
        });
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.create.loading = false;
        });
        builder.addCase(createPost.rejected, (state, action) => {
            state.create.loading = false;
        });

        builder.addCase(deletePost.fulfilled, (state, action) => {
            const URL = action!.payload!.config!.url!;
            const uuidMatch = URL.match(/\/post\/delete\/([a-zA-Z0-9-]*)/) as [string, string];
            const uuid = uuidMatch[1];
            state.profile.results = state.profile.results.filter(post => post.uuid !== uuid);
            state.fetch.results = state.fetch.results.filter(post => post.uuid !== uuid);
        });

    },
});

export const {
    addPost,
    setProfilePostEmpty,
} = postSlice.actions;

export default postSlice.reducer;
