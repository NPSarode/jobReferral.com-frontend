import { get, loginUser, post, registerUser } from "./ApiHelper";
import * as url from "./UrlHelper";

// AUTH
export const login = (data) => loginUser(url.LOGIN, data)
export const logout = () => get(url.LOGOUT)
export const register = (data) => registerUser(url.REGISTER, data)

// USERS
export const getUsers = () => get(url.USERS)

// COMPANY DETAILS
export const getCompanyDetails = () => get(url.JOB_SUMMARY)
export const addJobDetails = (data) => post(url.ADD_JOB, data)