import { CREATE_POST, GET_POSTS } from "../constants/PostActionTypes";
import API from "../services/API";

export function getPosts() {
  return {
    type: GET_POSTS,
    payload: API.get("/posts")
  };
}
