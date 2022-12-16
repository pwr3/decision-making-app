import {takeEvery, put, call} from 'redux-saga/effects'

const getUser = () => {
    return 'Mashka'
}
function* testWorker(action) {
    try {
        // const user = yield call(fetchFunc, action.payload);
        const user = yield getUser();
        yield put({ type: 'issues/testSuccess', payload: user});
    }  catch(err) {
        yield put({ type: 'issues/testFailed', payload: 'error'})
    }
}
export default function* mySaga() {
    yield takeEvery("issues/fetchIssues", testWorker)
}