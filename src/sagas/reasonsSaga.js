import { takeEvery, put, call, all } from "redux-saga/effects";
import { apiCreateReason, apiGetReasons } from "../services/reasons";

function* fetchReasons(action) {
    try {
        const response = yield apiGetReasons(action.payload);
        yield put({ type: "reasons/fetchSuccess", payload: response });
    } catch (err) {}
}

function* createReason(action) {
    try {
        const response = yield apiCreateReason(action.payload);
        yield put({
            type: "reasons/addSuccess",
            payload: action.payload.issueId,
        });
    } catch (err) {}
}

export default function* reasonsSaga() {
    yield takeEvery("reasons/fetch", fetchReasons);
    yield takeEvery("reasons/add", createReason);
}
