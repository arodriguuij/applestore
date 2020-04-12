import userActionTypes from "./user.types";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.FETCH_USER_LOGIN_START:
      return {};
    case userActionTypes.FETCH_USER_LOGIN_SUCCESS:
      return {};
    case userActionTypes.FETCH_USER_LOGIN_FAILURE:
      return {};
    case userActionTypes.FETCH_USER_REGISTER_START:
      return {};
    case userActionTypes.FETCH_USER_REGISTER_SUCCESS:
      return {};
    case userActionTypes.FETCH_USER_REGISTER_FAILURE:
      return {};
    default:
        return state;
  }
};

export default userReducer;