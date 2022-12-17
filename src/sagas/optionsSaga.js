import { takeEvery, put, call, all } from 'redux-saga/effects'
import { apiCreateOption, apiGetOptions } from "../services/options";
import {apiGetReasons} from "../services/reasons";


function* fetchOptions(action) {
    try {
        const optionsResponse = yield apiGetOptions(action.payload);
        // console.log('optionsResponse', optionsResponse)
        const optionIds = optionsResponse.optionsList.map((option) => (option.id));
        const reasonsResponse = yield apiGetReasons(optionIds);
        // console.log('reasonsResponse', reasonsResponse)
        yield put({type: 'reasons/fetchSuccess', payload: reasonsResponse})
        yield put({type: 'options/fetchSuccess', payload: optionsResponse})
    } catch (err) {

    }
}

function* createOption(action) {
    try {
        const response = yield apiCreateOption(action.payload);
        yield put({ type: 'options/addSuccess', payload: action.payload.issueId })
    } catch (err) {

    }
}

export default function* optionsSaga() {
    yield takeEvery('options/fetch', fetchOptions);
    yield takeEvery('options/add', createOption);
    yield takeEvery('options/addSuccess', fetchOptions);
    yield takeEvery('reasons/addSuccess', fetchOptions);

}