import { GET_JOB_SUMMARY, GET_JOB_SUMMARY_FAIL, GET_JOB_SUMMARY_SUCCESS } from "./actionTypes"


// GET JOS SUMMARY
export const getJobSummary = () => ({
    type: GET_JOB_SUMMARY,
})

export const getJobSummarySuccess = (data) => ({
    type: GET_JOB_SUMMARY_SUCCESS,
    payload: data
})

export const getJobSummaryFail = (err) => ({
    type: GET_JOB_SUMMARY_FAIL,
    payload: err
})