import { call, put, takeEvery } from "redux-saga/effects";

import { 
    LOGIN, LOGOUT, REGISTER
} from "./actionTypes";

import {
    loginFail,
    loginSuccess,
    logoutFail,
    logoutSuccess,
    registerFail,
    registerSuccess
} from "./actions";

import { login, logout } from "../../helper/BackendHelper";

function* loginUser({payload: { data, Navigate}}) {
  try {
    const response = yield call(login, data);
    localStorage.setItem('token', response)
    Navigate("/")
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* logoutUser() {
  try {
    const response = yield call(logout);
    yield put(logoutSuccess(response));
  } catch (error) {
    yield put(logoutFail(error));
  }
}

function* registerUser({payload: data}) {
  try {
    const response = yield call(login, data);
    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerFail(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN, loginUser);
  yield takeEvery(LOGOUT, logoutUser);
  yield takeEvery(REGISTER, registerUser);
}

export default authSaga;
