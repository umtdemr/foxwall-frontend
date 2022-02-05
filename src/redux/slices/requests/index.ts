import { createSlice } from "@reduxjs/toolkit";
import { IRequestResults } from "../../../types/global/request_types";
import { changeIsCameFollowRequest } from "../profile";
import { cameFollowRequestAction, fetchReceivedRequests } from "./requests-thunks";


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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReceivedRequests.fulfilled, (state, action) => {
            const data = action.payload.data;
            state.loading = false;
            state.count = data.count;
            state.results = data.results;
        });

        builder.addCase(cameFollowRequestAction.fulfilled, (state, action) => {
            // TODO : change is came follow request state
            if (action.payload.data.message === "rejected") {
                changeIsCameFollowRequest({ isCameIssue: true });
            } else if (action.payload.data.message === "allowed") {
                changeIsCameFollowRequest({ isCameIssue: false });
            }
        });
    },
});


export default requestsSlice.reducer;