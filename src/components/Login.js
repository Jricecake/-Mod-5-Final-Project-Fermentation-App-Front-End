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
    redirect: false,
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
      // setLogin({ redirect: true });
      // history.push("/account");
    }
  };

  useEffect(() => {
    (() => {
      if (props.authUser.length > 0) {
        history.push('/about')
      }
    })()
  }, [props.authUser]);

  return (
    <Col className="justify-content-center">
      <Row>
        <Form>
          <Form.Group>
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              value={login.username}
              name="username"
              onChange={handleChange}
              placeholder="Username"
            />

            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              value={login.password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLogin: (userInfo) => dispatch(fetchLoginUser(userInfo)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));