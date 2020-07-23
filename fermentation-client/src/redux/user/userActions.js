import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGIN_USER,
  LOGOUT_USER,
} from "./userTypes";
import { fetchProjectsSuccess } from "../project/projectActions";
import history from '../../history'
const API_ROOT = `https://desolate-savannah-14635.herokuapp.com/api/v1`;
const USER_URL = `${API_ROOT}/users`;
const LOGIN_URL = `${API_ROOT}/login`;
const CURRENTUSER_URL = `${API_ROOT}/current_user`;

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error: error,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchLoginUser = (user) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          dispatch(fetchUsersFailure(data.error));
          alert('Login failed. Please check username and password and try again.')
        } else {
          history.push('/projects')
          console.log(data);
          dispatch(loginUser(data.user));
          dispatch(fetchProjectsSuccess(data.projects));
          localStorage.setItem("token", data.jwt);
        }
      });
  };
};

export const fetchLoginUserByToken = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    const token = localStorage.token;
    fetch(CURRENTUSER_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          dispatch(fetchUsersFailure(data.error));
          localStorage.removeItem("token");
        } else {
          console.log(data);
          dispatch(loginUser(data.user));
        }
      });
  };
};
export const postUser = (newUser) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch(USER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          dispatch(fetchUsersFailure(data.error));
        } else {
          dispatch(loginUser(data.user));
          localStorage.setItem("token", data.jwt);
        }
      });
  };
};
export const loginUser = (userObject) => ({
  type: LOGIN_USER,
  payload: userObject,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
