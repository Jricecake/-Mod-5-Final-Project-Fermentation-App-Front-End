import React from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import {Row, Col} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const Landing = () => {
  return (
    <Row>
      <Col sm={3}></Col>
        <Login />
        <Signup />
        <Col sm={3}></Col>
    </Row>
  );
};
export default Landing;
