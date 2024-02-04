import { combineReducers } from "@reduxjs/toolkit";

import authReducer from './Authentication/reducer'

export const rootReducer = combineReducers({
    authReducer
})