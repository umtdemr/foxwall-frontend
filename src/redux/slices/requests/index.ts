import { createSlice } from "@reduxjs/toolkit";
import { IRequestResults } from "../../../types/global/request_types";
import { fetchReceivedRequests } from "./requests-thunks";


export interface IRequestsData {
    results: IRequestResults[],
    count: number
}


const initialState: IRequestsData = {
    results: [],
    count: 0,
}


const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReceivedRequests.fulfilled, (state, action) => {
            const data = action.payload.data;
            state.count = data.count;
            state.results = data.results;
        });
    },
});


export default requestsSlice.reducer;