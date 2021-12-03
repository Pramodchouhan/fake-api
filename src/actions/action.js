import {
  GET_FAMILIES,
  GET_LOCATION,
  GET_PRODUCT,
  GET_TRANSACTION,
  SET_LOGIN,
  SET_TOKEN,
  SET_USER,
} from "./actiontype";

export const setuser = (userregister) => ({
  type: SET_USER,
  userregister,
});

export const userlogin = (payload) => ({
  type: SET_LOGIN,
  payload,
});

export const usertoken = (payload) => ({
  type: SET_TOKEN,
  payload,
});
export const userproduct = (payload) => ({
  type: GET_PRODUCT,
  payload,
});

export const userfamilies = (payload) => ({
  type: GET_FAMILIES,
  payload,
});

export const userlocation = (payload) => ({
  type: GET_LOCATION,
  payload,
});

export const usertransaction = (payload) => ({
  type: GET_TRANSACTION,
  payload,
});
