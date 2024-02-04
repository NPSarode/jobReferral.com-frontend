import { all, fork } from "redux-saga/effects";

import authSaga from "./Authentication/saga";

import userSaga from "./Configuration/User/saga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(userSaga)]);
}
