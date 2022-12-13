import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {apiCreateIssue, apiGetIssues } from "../services/issues";


const initialState = {
  loading: false,
  error: false,
  issueList: []
};

export const fetchIssues = createAsyncThunk(
    'issues/fetchIssues',
    async () => {
        return await apiGetIssues();
    }
)

export const createIssue = createAsyncThunk(
    'issues/createIssue',
    async (title) => {
        return await apiCreateIssue(title);
    }
)

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
      // fetch:(state, action) => {
      //     state.issueList = action.payload
      // }
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchIssues.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchIssues.fulfilled, (state, action) => {
            state.loading = false;
            state.issueList = action.payload;
        })

        .addCase(createIssue.fulfilled, (state, action) => {
        console.log('ADDED', action.payload);
        // state.currentIssue = action.payload;
        })

  }
});