import { GET_TRANSACTION } from "../actions/actiontype";

const initialstate = {
  transection: [],
};

const transactionreducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      };

    default:
      return state;
  }
};
export default transactionreducer;
