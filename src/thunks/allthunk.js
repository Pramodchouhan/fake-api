import axios from "axios";
import { userfamilies, userproduct } from "../actions/action";
const client = axios.create({
  baseURL: "http://localhost:8000/",
});
const token = JSON.parse(localStorage.getItem("auth"));
client.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const requestproduct = () => async (dispatch) => {
  try {
    const response = await client.get("products");
    console.log(response.data);
    dispatch(userproduct(response.data));
  } catch (err) {
    console.log("request error", err);
  }
};
export const requestfamilies = () => async (dispatch) => {
  try {
    const response = await client.get("families");
    console.log(response.data);
    dispatch(userfamilies(response.data));
  } catch (err) {
    console.log("request error", err);
  }
};
export const requestlocation = () => async (dispatch) => {
  try {
    const response = await client.get("location");
    console.log(response.data);
    dispatch(userproduct(response.data));
  } catch (err) {
    console.log("request error", err);
  }
};
export const requesttransaction = () => async (dispatch) => {
  try {
    const response = await client.get("transactions");
    console.log(response.data);
    dispatch(userproduct(response.data));
  } catch (err) {
    console.log("request error", err);
  }
};
