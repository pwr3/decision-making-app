import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: false,
    issueData: { title: '' },
    optionsList: []
};

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        fetch: (state) => {
            state.loading = true;
            state.issueData = { title: '' };
            state.optionsList = [];
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.issueData = action.payload.issueData
            state.optionsList = action.payload.optionsList;
        },
        add: (state) => {
            state.loading = true;
        },
        addSuccess: (state, action) => {
            state.loading = false;
        },
    },
});

export const { fetch, add } = optionsSlice.actions;