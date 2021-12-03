import { GET_LOCATION } from "../actions/actiontype";

const initialstate = {
  location: [],
};

const locationreducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
};

export default locationreducer;
