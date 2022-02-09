import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRequestResults } from "../../../types/global/request_types";
import { fetchReceivedRequests } from "./requests-thunks";


export interface IRequestsData {
    results: IRequestResults[];
    count: number;
    loading: boolean;
}


const initialState: IRequestsData = {
    loading: true,
    results: [],
    count: 0,
}


const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        removeRequest: (state, action: PayloadAction<{ username: string }>) => {
            state.results = state.results.filter((resultItem: IRequestResults) => 
                resultItem.creator.username !== action.payload.username
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReceivedRequests.fulfilled, (state, action) => {
            const data = action.payload.data;
            state.loading = false;
            state.count = data.count;
            state.results = data.results;
        });
    },
});


export const {
    removeRequest,
} = requestsSlice.actions;


export default requestsSlice.reducer;