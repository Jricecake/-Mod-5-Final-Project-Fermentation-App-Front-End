import React from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import {Row, Col} from 'react-bootstrap'

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
