import React from "react";
import { Container, Col, Row, NavLink } from "react-bootstrap";

export default function About() {
  return (
    <>
      <h1 className="outer-content">About</h1>
      <Container className="container-color-scheme">
        <Row>
          <Col md={8} className="text-align-left">
            <p>
              Bacterra was made with the hobbyist food fermenter in mind.
              Inspired by the works of Sandor Katz (The Art of Fermentation),
              Brad Leone (It's Alive!), Maangchi, The Noma Guide to
              Fermentation, and countless other resources, Fermer was created to
              aid in the everypersons's attempt at fermenting foods. Giving you
              the ability to track every meticulous detail, you are able to save
              the steps for what recipes worked, and isolate issues in those
              that didn't.
            </p>
            Happy fermenting!
          </Col>
        </Row>

        <Row>
          <Col className='fixed-bottom'>
          <p>
            Made by Jonny Riecke using ReactJS, ReactBootstrap, Javascript,
            HTML/CSS, and Redux.
          </p>
          <NavLink href="https://github.com/Jricecake/-Mod-5-Final-Project-Fermentation-App-Front-End">
            View On Github
          </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
}
