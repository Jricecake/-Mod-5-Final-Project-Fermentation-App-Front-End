import React, { useState, useEffect } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { withRouter } from 'react-router';
import { Row, Col, Container } from "react-bootstrap";

const Landing = () => {

  return (
    <Container>
      <Row>
        <Col sm={3}></Col>
        <Login />
        <Signup />
        <Col sm={3}></Col>
      </Row>
    </Container>
  );
};
export default Landing;
