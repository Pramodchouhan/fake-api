import { combineReducers } from "redux";
import registrationreducer from "../reducers/register";
import loginreducer from "../reducers/login";
import productreducer from "./product";
import familiesreducer from "./families";
import locationreducer from "./location";
import transactionreducer from "./transection";
const rootReducer = combineReducers({
  registrationreducer,
  loginreducer,
  productreducer,
  familiesreducer,
  locationreducer,
  transactionreducer,
});
export default rootReducer;
