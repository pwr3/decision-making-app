import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {apiCreateOption, apiGetOptions} from "../services/options";

const initialState = {
  loading: false,
  error: false,
  optionsList: []
};

export const fetchOptions = createAsyncThunk(
    'options/fetchOption',
    async () => {
        return await apiGetOptions();

    }
)

export const createOption = createAsyncThunk(
    'options/createOption',
    async (title) => {
        return await apiCreateOption(title);
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
                state.optionsList = action.payload;
            })

            .addCase(createOption.fulfilled, (state, action) => {
                console.log('ADDED', action.payload);
                // state.currentIssue = action.payload;
            })

    }

});

