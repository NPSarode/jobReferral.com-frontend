import { all, fork } from "redux-saga/effects";

import authSaga from "./Authentication/saga";

export default function* rootSaga() {
    fork(authSaga)
}