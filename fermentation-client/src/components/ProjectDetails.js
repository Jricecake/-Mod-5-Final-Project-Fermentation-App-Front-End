import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import ProjectTimeline from "../containers/ProjectTimeline";

const renderIngredients = (array) => {
  return array.map((ingredient) => {
    console.log(ingredient);
    return (
      <Card className="detail-ingredient" style={{ width: "8rem" }}>
        <Card.Title>{ingredient.name}</Card.Title>
        <Card.Body className="text-align-center">
          <div>{`${ingredient.quantity} ${ingredient.units}`}</div>
          <div>
            {ingredient.prep}
            </div>
        </Card.Body>
      </Card>
    );
  });
};

const renderVessels = (array) => {
  return array.map((vessel) => {
    return (
      <div>
        {vessel.material} {vessel.vessel} - {vessel.volume} {vessel.units}
      </div>
    );
  });
};

function ProjectDetails(props) {
  const startDate = new Date(props.thisProjectHere.created_at).getTime();
  const [thisLoaded, setLoaded] = useState(false);
  return props.thisProjectHere.name ? (
    <Container className="justify-content-center sub-container-color-scheme ">
      <Row>
        <Col lg={8} className="justify-content-left text-align-center">
          <h1>{props.thisProjectHere.name}</h1>
          {/* <h3>{startDate}</h3> */}
          <Row className="dark-body-color-scheme project-details-container">
            <br />
            <Row>
              <Col></Col>
              <Col>Project Details</Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md={5} className="detail-info">
                <div>
                  Stored in: {renderVessels(props.thisProjectHere.vessels)}
                </div>
              </Col>
              <Col></Col>
              <Col md={5} className="detail-info">
                Brine Info:
                <div className="text-align-left">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col>Ingredients:</Col>
              <Col></Col>
            </Row>
            <Row className="container-sizing">
              {renderIngredients(props.thisProjectHere.ingredients)}
            </Row>
          </Row>
        </Col>
        <Col lg={4} className="text-align-center">
          <Row>Timeline</Row>
          <ProjectTimeline project={props.thisProjectHere} />
        </Col>
      </Row>
    </Container>
  ) : (
    <h1>FUCK OFF</h1>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    thisProjectHere: state.project.projects.find(
      (project) => project.id == ownProps.match.params.id
    ),
  };
};

export default connect(mapStateToProps, null)(ProjectDetails);
