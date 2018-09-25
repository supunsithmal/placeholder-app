import {
  CREATE_POST,
  GET_POSTS,
  GET_COMMENTS
} from "../constants/PostActionTypes";
import API from "../services/API";
import UserActions from "./UserActions";

export function getPosts() {
  return {
    type: GET_POSTS,
    payload: API.get("/posts")
  };
}

export function getComments(postId) {
  return {
    type: GET_COMMENTS,
    payload: API.get("/comments?postId=" + postId)
  };
}
