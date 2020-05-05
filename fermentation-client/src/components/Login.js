import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { api } from "../services/api";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchLoginUser } from "../redux/user/userActions";

const Login = (props) => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    validated: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setLogin({ ...login, validated: true });
    } else {
      event.preventDefault();
      const user = {
        user: {
          username: login.username,
          password: login.password,
        },
      };
      props.fetchLogin(user);
      if (!!localStorage.getItem("token")){
        props.history.push('/projects')
      }
      
    }
  };

  return (
    <div>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={login.username}
          name="username"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          value={login.password}
          name="password"
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchLogin: (userInfo) => dispatch(fetchLoginUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(Login);