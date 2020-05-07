import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import ProjectTimeline from "../containers/ProjectTimeline";

const renderIngredients = (array) => {
  return array.map((ingredient) => {
    console.log(ingredient);
    return (
      <Card style={{ width: "8rem", margin: 10 }}>
        <Card.Title>{ingredient.name}</Card.Title>
        <Card.Body>{`${ingredient.quantity} ${ingredient.units}`}</Card.Body>
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
  const [thisLoaded, setLoaded] = useState(false);

  console.log(props.allProjects);
  return props.thisProjectHere.name ? (
    <Container className="justify-content-center bgcolor-nice">
      <h1>{props.thisProjectHere.name}</h1>
      <h3>{props.thisProjectHere.created_at}</h3>
      <Row>
        <Col lg={8} className="bg-secondary">
          <br />
          <Row>Project Details</Row>
          <Row>Stored in: {renderVessels(props.thisProjectHere.vessels)}</Row>
          <Row>Ingredients:</Row>
          <Row className='container-sizing'>{renderIngredients(props.thisProjectHere.ingredients)}</Row>
        </Col>
        <Col><ProjectTimeline project={props.thisProjectHere}/></Col>
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
