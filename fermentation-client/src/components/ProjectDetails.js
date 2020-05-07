import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import ProjectTimeline from "../containers/ProjectTimeline";

const renderIngredients = (array) => {
  return array.map((ingredient) => {
    console.log(ingredient);
    return (
      <Card className='detail-ingredient' style={{ width: "8rem" }}>
        <Card.Title>{ingredient.name}</Card.Title>
        <Card.Body className='text-align-center'>{`${ingredient.quantity} ${ingredient.units}`}</Card.Body>
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

    // <Container className="justify-content-center bgcolor-nice">
    //   <Row>
    //     <Col sm={3}>Vessel</Col>
    //     <Col></Col>
    //     <Col></Col>
    //   </Row>
    //   <Row>
    //     <Col sm={3}>Brine</Col>
    //     <Col></Col>
    //     <Col></Col>
    //   </Row>
    //   <Row>
    //     <Col>Ingredients</Col>
    //     {renderIngredients(props.thisProjectHere.ingredients)}
    //   </Row>
    // </Container>


    <Container className="justify-content-center card-color-scheme ">
      <h1>{props.thisProjectHere.name}</h1>
      <h3>{startDate}</h3>
      <Row>
        <Col lg={8} className="bg-secondary project-details-container">
          <br />
          <Row>Project Details</Row>
          <Row>Stored in: {renderVessels(props.thisProjectHere.vessels)}</Row>
          <Row>Ingredients:</Row>
          <Row className='container-sizing'>{renderIngredients(props.thisProjectHere.ingredients)}</Row>
        </Col>
        <Col className='text-align-center'>
        <Row>Timeline</Row>
        <ProjectTimeline project={props.thisProjectHere}/>
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
