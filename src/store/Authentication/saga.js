import { call, put, takeEvery } from "redux-saga/effects";

import { 
    LOGIN
} from "./actionTypes";

import {
    loginFail,
    loginSuccess
} from "./actions";

function* fetchTasks() {
  try {
    const response = yield call(getTasks);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN, fetchTasks);
}

export default authSaga;
