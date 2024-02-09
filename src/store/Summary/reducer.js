import { GET_JOB_SUMMARY_FAIL, GET_JOB_SUMMARY_SUCCESS } from "./actionTypes";

const INIT_STATE = {
  details: [],
  error: {}
};

const jobSummary = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_JOB_SUMMARY_SUCCESS: {
      return {
        ...state,
        details: action.payload
      };
    }

    case GET_JOB_SUMMARY_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default : {
        return state
    }
  }
};

export default jobSummary;
