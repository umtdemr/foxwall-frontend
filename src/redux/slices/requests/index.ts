import { createSlice } from "@reduxjs/toolkit";


interface IRequestsData {
    results: [],
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
});


export default requestsSlice.reducer;