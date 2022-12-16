import { configureStore } from '@reduxjs/toolkit';
import { issuesSlice } from './issuesSlice';
import { optionsSlice } from "./optionsSlice";
import { reasonsSlice } from "./reasonsSlice";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    issues: issuesSlice.reducer,
    options: optionsSlice.reducer,
    reasons: reasonsSlice.reducer,
  },
  middleware: [saga]
});

saga.run(rootSaga);
