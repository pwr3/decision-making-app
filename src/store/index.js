import { configureStore } from '@reduxjs/toolkit';
import { issuesReducer } from './issuesSlice';

export const store = configureStore({
  reducer: {
    issues: issuesReducer,
  },
});
