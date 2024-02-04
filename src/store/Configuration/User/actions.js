import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from "./actionTypes"


// GET USERS
export const getUsers = (data) => ({
    type: GET_USERS,
    payload: data
})

export const getUsersSuccess = (data) => ({
    type: GET_USERS_SUCCESS,
    payload: data
})

export const getUsersFail = (err) => ({
    type: GET_USERS_FAIL,
    payload: err
})