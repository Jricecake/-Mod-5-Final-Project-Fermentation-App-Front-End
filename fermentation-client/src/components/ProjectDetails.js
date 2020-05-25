import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import ProjectTimeline from "../containers/ProjectTimeline";
import { useHistory } from "react-router-dom";
import { updateProject } from "../redux";

const renderIngredients = (array) => {
  return array.map((ingredient) => {
    console.log(ingredient);
    return (
      <Card className="detail-ingredient" style={{ width: "8rem" }}>
        <Card.Title>{ingredient.name}</Card.Title>
        <Card.Body className="text-align-center">
          <div>{`${ingredient.quantity} ${ingredient.units}`}</div>
          <div>{ingredient.prep}</div>
        </Card.Body>
      </Card>
    );
  });
};

const renderBrines = (array) => {
  if (array.length > 0) {
    return (
      <Col md={5} className="detail-info">
        Brine Info:
        <div className="text-align-left">
        {array.map(item => `${item.amount} ${item.units} ${item.salt} ${item.sugar}`)}
        </div>
      </Col>
    );
  }
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
  const history = useHistory()
  const startDate = new Date(props.thisProjectHere.created_at).getTime();
  const parsedDate = new Date(startDate).toString();
  const [thisLoaded, setLoaded] = useState(false);
  
  const completeProject = (event) => {
    event.preventDefault();
    const changedProject = {
      id: props.thisProjectHere.id,
      completed: true
    }
    props.submitProject(changedProject)
    
  }

  return props.thisProjectHere ? (
    <Container className="justify-content-center sub-container-color-scheme ">
      <Row>
        <Col lg={8} className="justify-content-left text-align-center">
          <h1>{props.thisProjectHere.name}</h1>

          <h5>Started at: {parsedDate}</h5>
          Ends on: {props.thisProjectHere.end_date}
          <Row className="dark-body-color-scheme project-details-container justify-content-center">
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
              {/* function to add these columns for brine if brines are present in the project */}
              <Col></Col>
              <Col md={5} className="detail-info">
                {renderBrines(props.thisProjectHere.brines)}
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
      <Button onClick={() => history.push(`/projects/${props.thisProjectHere.id}/edit`)}>Edit Project</Button>
      <Button onClick={completeProject}>Complete Project</Button>
          </Row>
        </Col>
        <Col lg={4} className="text-align-center">
          <Row>Timeline</Row>
          <ProjectTimeline project={props.thisProjectHere} />
        </Col>
      </Row>
    </Container>
  ) : (
    <h1>Loading..</h1>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    thisProjectHere: state.project.projects.find(
      (project) => project.id == ownProps.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitProject: (project) => updateProject(project)(dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
