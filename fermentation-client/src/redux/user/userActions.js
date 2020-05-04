import { FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  POST_USER_FAILURE,
  LOGIN_USER } from './userTypes'
const USER_URL = "http://localhost:3000/api/v1/users"

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
          localStorage.setItem("token", data.token)
          dispatch(loginUser(data.user));
        }
      });
  };
}
const loginUser = (userObject) => ({
  type: 
  LOGIN_USER,
  payload: userObject
})
