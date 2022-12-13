import { configureStore } from '@reduxjs/toolkit';
import { issuesSlice } from './issuesSlice';
import {optionsSlice} from "./optionsSlice";

export const store = configureStore({
  reducer: {
    issues: issuesSlice.reducer,
    options: optionsSlice.reducer,
  },
});
