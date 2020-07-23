import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
} from "./userTypes";

const initialState = {
  currentUser: {},
  loading: false,
  logged_in: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        logged_in: true
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: false,
        logged_in: true,
        currentUser: action.payload,
        projects: action.payload.projects
      };
    case LOGOUT_USER:
      localStorage.removeItem("token")
      return {
        logged_in: false,
        loading: false,
        currentUser: {},
      };
    default:
      return state;
  }
};

export default userReducer;
