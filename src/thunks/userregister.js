import axios from "axios";
import { usertoken } from "../actions/action";
export const requestadduser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/auth/register",
      user
    );
    dispatch(usertoken(response.data));
  } catch (err) {
    console.log("request error", err);
  }
};
