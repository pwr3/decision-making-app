import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    reasonsList: []
};

export const reasonsSlice = createSlice({
    name: 'reasons',
    initialState,
    reducers: {
        fetch: (state) => {
            state.loading = true;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.reasonsList = action.payload;
        },
        add: (state) => {
            state.loading = true;
        },
        addSuccess: (state, action) => {
            state.loading = false;
        },
    },
});

export const { add, fetch } = reasonsSlice.actions;
