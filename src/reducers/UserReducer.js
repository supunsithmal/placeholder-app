import * as UserActions from "../constants/UserActionTypes";

const initialState = {
  users: [],
  progress: {
    loading: false,
    success: false,
    failed: false
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActions.GET_USERS_PENDING:
      state.progress.loading = true;
      state.progress.success = false;
      state.progress.failed = false;
      break;

    case UserActions.GET_USERS_FULFILLED:
      state.progress.loading = false;
      state.progress.success = true;
      state.progress.failed = false;
      state.users = action.payload.data;
      break;

    case UserActions.GET_USERS_FAILED:
      state.progress.loading = false;
      state.progress.success = false;
      state.progress.failed = true;
      break;

    default:
      break;
  }

  return { ...state };
};

export default userReducer;
