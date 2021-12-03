import { GET_FAMILIES } from "../actions/actiontype";

const initialstate = {
  families: [],
};

const familiesreducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_FAMILIES:
      return {
        ...state,
        families: action.payload,
      };

    default:
      return state;
  }
};

export default familiesreducer;
