import React, { useState, useEffect } from "react";
import { Row, Button, Col, Form } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchLoginUser } from "../redux/user/userActions";

const Login = (props) => {
  const history = useHistory();

  const [login, setLogin] = useState({
    username: "",
    password: "",
    validated: false,
    redirect: props.redirect,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  useEffect(() => {
    if (props.redirect == true){
      history.push('/projects')
    }
  }, [props.redirect])

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
      props.fetchLogin(user)
      // if (login.redirect == true){
      //   history.push('/projects')
      // }
      redirectPage()
      // setLogin({ redirect: true });
      // history.push("/account");
    }
  };


  const redirectPage = () => {
    if (login.redirect){
      history.push('/projects')
    }
  }
  return (
    
    <Col className="justify-content-center">
      <Row>
        <Form>
          <Form.Group>
            <Form.Label>Login</Form.Label>
            <Form.Control
              required
              type="text"
              value={login.username}
              name="username"
              onChange={handleChange}
            />
            <Form.Control.Feedback type='invalid'>Please enter username</Form.Control.Feedback>

            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Control
              required
              type="password"
              value={login.password}
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </Form>
      </Row>
    </Col>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.user.currentUser,
    redirect: state.user.logged_in
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLogin: (userInfo) => dispatch(fetchLoginUser(userInfo)),
  // status: true or false based on fetchuserresults 
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
