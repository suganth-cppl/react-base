import { USER_LOGIN, USER_LOGOUT } from "./../actions/user_action";

const initState = {};

const user_reducer = (state = initState, action) => {
  if (action.type === USER_LOGIN) {
    state = action.payload;
  }

  if (action.type === USER_LOGOUT) {
    state = {};
  }

  return state;
};

export default user_reducer;
