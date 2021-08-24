export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export const user_login_action = (input) => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGIN,
      payload: input,
    });
  };
};

export const user_logout_action = () => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGOUT,
    });
  };
};
