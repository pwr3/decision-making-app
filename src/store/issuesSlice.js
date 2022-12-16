import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false,
  newIssueId: null,
  issueList: []
};

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
      fetch: (state) => {
          state.loading = true;
      },
      fetchSuccess: (state, action) => {
          state.loading = false;
          state.issueList = action.payload;
      },
      add: (state) => {
          state.loading = true;
      },
      addSuccess: (state, action) => {
          state.loading = false;
          state.newIssueId = action.payload
      },
  },
});

export const { fetch, add } = issuesSlice.actions;