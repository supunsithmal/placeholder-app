import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  PostReducer,
  UserReducer
});

export default rootReducer;
