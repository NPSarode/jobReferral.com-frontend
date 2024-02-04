import { get, post } from "./ApiHelper";
import * as url from "./UrlHelper";

// AUTH
export const login = (data) => post(url.LOGIN, data)
export const logout = () => get(url.LOGOUT)
export const register = (data) => post(url.REGISTER, data)

// USERS
export const getUsers = () => get(url.USERS)