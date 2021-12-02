import { combineReducers } from "redux";
import registrationreducer from "../reducers/register";
import loginreducer from "../reducers/login";
const rootReducer = combineReducers({
   registrationreducer,
   loginreducer
})
export default rootReducer;