import { SET_TOKEN, SET_USER } from "../actions/actiontype";

const initialstate = {
  userregister: [
    {
      email: "",
      password: "",
    },
  ],
  token: [],
};

const registrationreducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userregister: action.userregister,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default registrationreducer;
