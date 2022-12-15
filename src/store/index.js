import { configureStore } from '@reduxjs/toolkit';
import { issuesSlice } from './issuesSlice';
import { optionsSlice } from "./optionsSlice";
import { reasonsSlice } from "./reasonsSlice";


export const store = configureStore({
  reducer: {
    issues: issuesSlice.reducer,
    options: optionsSlice.reducer,
    reasons: reasonsSlice.reducer,
  },
});
