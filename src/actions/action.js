import { SET_LOGIN, SET_TOKEN, SET_USER } from "./actiontype"


export const setuser=(userregister)=>({
  type:SET_USER,
  userregister
});

export const userlogin=(payload)=>({
    type:SET_LOGIN,
    payload
})

export const usertoken=(payload)=>({
    type:SET_TOKEN,
    payload
})