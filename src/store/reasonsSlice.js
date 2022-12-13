import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { apiGetReasons, apiCreateReason } from "../services/reasons";

const initialState = {
    loading: false,
    error: false,
    reasonsList: []
};

export const fetchReasons = createAsyncThunk(
    'reasons/fetchReason',
    async (payload) => {
        return await apiGetReasons(payload);

    }
)

export const createReason = createAsyncThunk(
    'reasons/createReason',
    async (payload) => {
        return await apiCreateReason(payload);
    }
)

export const reasonsSlice = createSlice({
    name: 'reasons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReasons.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchReasons.fulfilled, (state, action) => {
                state.loading = false;
                // state.issueData = action.payload.issueData
                state.reasonsList = action.payload;
            })

            .addCase(createReason.fulfilled, (state, action) => {
                console.log('ADDED', action.payload);
                // state.currentIssue = action.payload;
            })

    }

});

