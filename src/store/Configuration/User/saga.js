import { call, put, takeEvery } from "redux-saga/effects";

import { GET_USERS } from "./actionTypes";

import { getUsersFail, getUsersSuccess } from "./actions";
import { getUsers } from "../../../helper/BackendHelper";


function* onGetUsers() {
  try {
    const response = yield call(getUsers);
    yield put(getUsersSuccess(response));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS, onGetUsers);
}

export default userSaga;
