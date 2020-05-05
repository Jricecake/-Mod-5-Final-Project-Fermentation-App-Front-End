import { FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  POST_USER_FAILURE,
  LOGIN_USER } from './userTypes'
const USER_URL = "http://localhost:3000/api/v1/users"
const LOGIN_URL = "http://localhost:3000/api/v1/login"

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
        Accept: 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error)
          dispatch(fetchUsersFailure(data.error));
        } else {
          console.log(data)
          dispatch(loginUser(data.user));
          localStorage.setItem("token", data.jwt)
        }
      });
  };
}
export const postUser = (newUser) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch(USER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          dispatch(fetchUsersFailure(data.error));
        } else {
          console.log(data)
          dispatch(loginUser(data.user));
          localStorage.setItem("token", data.jwt)
        }
      });
  };
}
export const loginUser = (userObject) => ({
  type: 
  LOGIN_USER,
  payload: userObject
})
