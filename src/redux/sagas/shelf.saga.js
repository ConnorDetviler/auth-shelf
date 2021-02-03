import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* addItem(action) {
    try {
        const item = action.payload
        yield axios.post('/api/shelf', item);
        yield put({type: 'FETCH_SHELF'});
    } catch (err) {
        console.log(err);
    }
}

function* deleteItem(action) {
  try {
    const idToDelete = action.payload
    yield axios.delete(`/api/shelf/${idToDelete}`)
    yield put({type: 'FETCH_SHELF'});
  } catch (error) {
    console.error(error);
  }
}

function* fetchShelf() {
  try {
    const response = yield axios.get("/api/shelf");
    yield put({ type: "SET_SHELF", payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* shelfSaga() {
  yield takeEvery("FETCH_SHELF", fetchShelf);    
  yield takeEvery('ADD_ITEM', addItem);
  yield takeEvery('DELETE_ITEM', deleteItem);
}

export default shelfSaga;