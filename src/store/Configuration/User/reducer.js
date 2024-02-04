import { GET_USERS_FAIL, GET_USERS_SUCCESS } from "./actionTypes";

const INIT_STATE = {
  users: [],
  error: {}
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload
      };
    }

    case GET_USERS_FAIL: {
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

export default userReducer;
