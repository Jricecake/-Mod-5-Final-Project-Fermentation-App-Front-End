import React from "react";
import { connect } from "react-redux";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import ProjectTimeline from "../containers/ProjectTimeline";
import CompletedProjectTimeline from "../containers/CompletedProjectTimeline";
import { useHistory } from "react-router-dom";
import { updateProject } from "../redux";

const renderIngredients = (array) => {
  return array.map((ingredient) => {
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
          {array.map(
            (item) => `${item.amount} ${item.units} ${item.salt} ${item.sugar}`
          )}
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
  const history = useHistory();
  const startDate = new Date(props.thisProjectHere.created_at).getTime();
  const parsedDate = new Date(startDate).toString();

  const completeProject = (event) => {
    event.preventDefault();
    const changedProject = {
      id: props.thisProjectHere.id,
      completed: true,
      completion_date: new Date().getTime(),
    };
    props.submitProject(changedProject);
  };


  return props.thisProjectHere ? (
    <Container className="justify-content-center sub-container-color-scheme ">
      <Row>
        <Col md={8}>
          <h1>{props.thisProjectHere.name}</h1>
          <h5>Started at: {parsedDate}</h5>
          Ends on: {props.thisProjectHere.end_date}
          Project Detail
          <div>Stored in: {renderVessels(props.thisProjectHere.vessels)}</div>
          {/* function to add these umns for brine if brines are present in the project */}
          {renderBrines(props.thisProjectHere.brines)}
          Ingredients:
          <div className="ingredients-container">
            {renderIngredients(props.thisProjectHere.ingredients)}
          </div>
          
            <Button
              onClick={() =>
                history.push(`/projects/${props.thisProjectHere.id}/edit`)
              }
            >
              Edit Project
            </Button>
            {props.thisProjectHere.completed ? null : (
              <Button onClick={completeProject}>Complete Project</Button>
            )}
          
        </Col>
        <Col md={4}>
          Timeline
          {props.thisProjectHere.completed ? (
            <CompletedProjectTimeline project={props.thisProjectHere} />
          ) : (
            <ProjectTimeline project={props.thisProjectHere} />
          )}
        </Col>
      </Row>
    </Container>
  ) : (
    <h1>Loading...</h1>
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
