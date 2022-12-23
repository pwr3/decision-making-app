import { all } from "redux-saga/effects";
import issuesSaga from "./issuesSaga";
import optionsSaga from "./optionsSaga";
import reasonsSaga from "./reasonsSaga";

export default function* rootSaga() {
    yield all([issuesSaga(), optionsSaga(), reasonsSaga()]);
}
