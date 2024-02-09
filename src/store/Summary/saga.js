import { call, put, takeEvery } from "redux-saga/effects";

import { GET_JOB_SUMMARY } from "./actionTypes";

import { getJobSummaryFail, getJobSummarySuccess } from "./actions";
import { getCompanyDetails } from "../../helper/BackendHelper";


function* onGetJobDetails() {
  try {
    const response = yield call(getCompanyDetails);
    yield put(getJobSummarySuccess(response));
  } catch (error) {
    yield put(getJobSummaryFail(error));
  }
}

function* userSaga() {
  yield takeEvery(GET_JOB_SUMMARY, onGetJobDetails);
}

export default userSaga;
