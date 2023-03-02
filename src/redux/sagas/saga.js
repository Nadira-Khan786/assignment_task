import { put, takeLatest } from "redux-saga/effects";
// Import all actions
import {
  ADD_NEW_CONTECT_REQUEST,
  ADD_NEW_CONTECT_REQUEST_SUCCESS,
  SET_LOADING,
  DELETE_CONTECT_REQUEST,
  EDIT_CONTECT_REQUEST,
  DELETE_CONTECT_REQUEST_SUCCESS,
} from "../actions";

// ADD CONTECT
function* addUserData({ payload }) {
  yield put({ type: SET_LOADING });
  yield put({ type: ADD_NEW_CONTECT_REQUEST_SUCCESS, payload });
}

// DELETE CONTECT
function* deleteUserData({ payload }) {
  yield put({ type: DELETE_CONTECT_REQUEST_SUCCESS, payload });
}

// Export the saga (saga)
export default function* Saga() {
  yield takeLatest(ADD_NEW_CONTECT_REQUEST, addUserData);
  yield takeLatest(DELETE_CONTECT_REQUEST, deleteUserData);
}
