import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

export default function About() {
  return (
    <>
    <span className="outer-content">About</span>
    <Container className='container-color-scheme'>
      <Row>
      <Col></Col>
      <Col md={8} className='text-align-left'>
      Fermer was made with the hobbyist food fermenter in mind. Inspired by the works of Sandor Katz (The Art of Fermentation), Brad Leone (It's Alive!), Maanchi, The Noma Guide to Fermentation, and countless other resources, Fermer was created to aid in the everyman's attempt at fermenting foods. Giving you the ability to track every meticulous detail, you are able to save the steps for what recipes worked, and isolate issues in those that didn't.

      Happy fermenting!
      </Col>
      <Col></Col>
      </Row>
    </Container>
    </>
  )
}
