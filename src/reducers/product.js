import { GET_PRODUCT } from "../actions/actiontype";

const initialstate = {
  product: [],
};

const productreducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default productreducer;
