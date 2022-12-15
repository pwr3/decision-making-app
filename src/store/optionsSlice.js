import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {apiCreateOption, apiGetOptions} from "../services/options";

const initialState = {
    loading: false,
    error: false,
    issueData: { title: '' },
    optionsList: []
};

export const fetchOptions = createAsyncThunk(
    'options/fetchOption',
    async (payload) => {
        return await apiGetOptions(payload);

    }
)

export const createOption = createAsyncThunk(
    'options/createOption',
    async (payload) => {
        return await apiCreateOption(payload);
    }
)

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOptions.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchOptions.fulfilled, (state, action) => {
                state.loading = false;
                state.issueData = action.payload.issueData
                state.optionsList = action.payload.optionsList;
            })

            .addCase(createOption.fulfilled, (state, action) => {
                console.log('ADDED', action.payload);
                // state.currentIssue = action.payload;
            })

    }

});
