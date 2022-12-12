import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import {apiCreateIssue, apiGetIssues } from "../services/issues";
import {useDispatch} from "react-redux";

const initialState = {
  loading: false,
  error: false,
  currentIssue: 0,
  issueList: []
};

export const fetchIssues = createAsyncThunk(
    'issues/fetchIssues',
    async () => {
      const res = await apiGetIssues();
      return res;
    }
)

export const createIssue = createAsyncThunk(
    'issues/createIssue',
    async () => {
        const res = await apiCreateIssue('Some cool title yo');
        return res;
    }
)

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
      fetch:(state, action) => {
          state.issueList = action.payload
      }
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
        state.currentIssue = action.payload;
        })

  }
});

export const issuesReducer = issuesSlice.reducer;
