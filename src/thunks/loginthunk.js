import axios from 'axios';
import { userlogin } from '../actions/action';

export const requestlogin = (login) => async (dispatch) => {
   try {
    const response = await axios.post('http://localhost:8000/auth/login',login);
    dispatch(userlogin(response.data))

    }   
  catch (err) {
    console.log("request error",err);
  }
}