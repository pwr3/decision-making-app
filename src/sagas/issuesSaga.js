import {takeEvery, put, call, all} from 'redux-saga/effects'
import {apiCreateIssue, apiGetIssues } from "../services/issues";

function* fetchIssues() {
    try {
        const response = yield apiGetIssues();
        yield put({type: 'issues/fetchSuccess', payload: response})
    } catch (err) {

    }
}

function* createIssue(action) {
    try {
        const response = yield apiCreateIssue(action.payload);
        yield put({ type: 'issues/addSuccess', payload: response })
    } catch (err) {

    }
}

export default function* issuesSaga() {
    yield takeEvery('issues/fetch', fetchIssues);
    yield takeEvery('issues/add', createIssue);

}
