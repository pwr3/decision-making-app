import { takeEvery, put, call, all } from 'redux-saga/effects'
import { apiCreateOption, apiGetOptions } from "../services/options";


function* fetchOptions(action) {
    try {
        const response = yield apiGetOptions(action.payload);
        yield put({type: 'options/fetchSuccess', payload: response})
    } catch (err) {

    }
}

function* createOption(action) {
    try {
        const response = yield apiCreateOption(action.payload);
        yield put({ type: 'options/addSuccess', payload: response })
    } catch (err) {

    }
}

export default function* optionsSaga() {
    yield takeEvery('options/fetch', fetchOptions);
    yield takeEvery('options/add', createOption);

}