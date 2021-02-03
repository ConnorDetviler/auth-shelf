import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects'

function* shelfSaga() {
    yield takeEvery('ADD_ITEM', addItem)
}

function* addItem(action) {
    try {
        const item = action.payload
        yield axios.post('/api/shelf', item);
        // yield put GET request
    } catch (err) {
        console.log(err);
    }
}

export default shelfSaga;