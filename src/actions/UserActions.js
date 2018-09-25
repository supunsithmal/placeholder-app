import { GET_USERS, CREATE_USER } from "../constants/UserActionTypes";
import API from "../services/API";

export function getUsers() {
  return {
    type: GET_USERS,
    payload: API.get("/users")
  };
}
