import React, { useState, useEffect } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { withRouter } from "react-router";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";

const Landing = () => {
  const [signUp, setSignup] = useState(true);

  return (
    <>
      <Jumbotron className='landing-jumbotron'>
        <Row>
          <Col>
            <h1>Ferment the food<br></br> you were meant for!</h1>
            <p>Bacterra is a simple approach to creating, tracking, and saving your fermented food recipes.</p>
          </Col>
          <Col></Col>
        </Row>
      </Jumbotron>
      <Container className=" text-align-left container-spacing">
        <Row>
          <Col></Col>
          <Col sm={4}>
            <Login />
          </Col>
          <Col sm={4}>
            <Signup />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
export default Landing;
