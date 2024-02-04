import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./actionTypes";

const INIT_STATE = {
  c: 10
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return "";
    }

    case LOGIN_FAIL: {
      return "";
    }
    case REGISTER_SUCCESS: {
      return "";
    }

    case REGISTER_FAIL: {
      return "";
    }
    case LOGOUT_SUCCESS: {
      return "";
    }

    case LOGOUT_FAIL: {
      return "";
    }

    default : {
        return state
    }
  }
};

export default reducer;
