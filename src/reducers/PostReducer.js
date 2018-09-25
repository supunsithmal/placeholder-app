import * as PostActions from "../constants/PostActionTypes";

const initialState = {
  post: {
    userId: "",
    id: "",
    title: "",
    body: ""
  },
  posts: [],
  comments: [],
  progress: {
    loading: false,
    success: false,
    failed: false
  }
};

const postReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case PostActions.GET_POSTS_PENDING:
      state.progress.loading = true;
      state.progress.success = false;
      state.progress.failed = false;
      console.log(action.payload);
      break;
    case PostActions.GET_POSTS_FULFILLED:
      state.progress.loading = false;
      state.progress.success = true;
      state.progress.failed = false;
      state.posts = action.payload.data;
      console.log(action.payload);
      break;
    case PostActions.GET_POSTS_REJECTED:
      state.progress.loading = false;
      state.progress.success = false;
      state.progress.failed = true;
      console.log(action.payload);
      break;
    case PostActions.GET_COMMENTS_PENDING:
      state.progress.loading = true;
      state.progress.success = false;
      state.progress.failed = false;
      console.log(action.payload);
      break;
    case PostActions.GET_COMMENTS_FULFILLED:
      state.progress.loading = false;
      state.progress.success = true;
      state.progress.failed = false;
      state.comments = action.payload.data;
      console.log(action.payload);
      break;
    case PostActions.GET_COMMENTS_REJECTED:
      state.progress.loading = false;
      state.progress.success = false;
      state.progress.failed = true;
      console.log(action.payload);
      break;

    default:
      break;
  }
  return { ...state };
};

export default postReducer;
