import axios from "axios";
import { userlogin } from "../actions/action";

export const requestlogin = (login, navigation) => async (dispatch) => {
  try {
    console.log(login);
    const response = await axios.post(
      "http://localhost:8000/auth/login",
      login
    );
    dispatch(userlogin(response.data));
    navigation("/home");
  } catch (err) {
    console.log("request error", err);
  }
};
