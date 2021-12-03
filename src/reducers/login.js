import { SET_LOGIN } from "../actions/actiontype";

const initialstate = {
  userlogin: {
    email: "",
    password: "",
  },
};

const loginreducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        userlogin: action.payload,
      };

    default:
      return state;
  }
};

export default loginreducer;
