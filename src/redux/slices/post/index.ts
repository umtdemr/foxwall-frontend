import { createSlice } from "@reduxjs/toolkit";
import { GlobalPost } from "../../../types/global/post_types";



export interface IPostInitialState {
    loading: boolean;
    count?: number,
    results: GlobalPost[] | [],
}


const initialState: IPostInitialState = {
    loading: false,
    results: [],
}


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
});

export default postSlice.reducer;