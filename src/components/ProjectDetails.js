import React from "react";
import { connect } from "react-redux";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import ProjectTimeline from "../containers/ProjectTimeline";
import CompletedProjectTimeline from "../containers/CompletedProjectTimeline";
import { useHistory } from "react-router-dom";
import { updateProject, fetchNotes } from "../redux";

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
        {vessel.material} {vessel.vessel} ({vessel.volume} {vessel.units})
      </div>
    );
  });
};

function ProjectDetails(props) {
  const history = useHistory();
  const startDate = new Date(props.thisProjectHere.created_at).getTime();
  const parsedDate = new Date(startDate).toString();
  let endDate = new Date(props.thisProjectHere.completion_date).toString();
  var today = new Date()

  var todaysDate =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  const currentDate = new Date(todaysDate).getTime();
  const elapsedTime = currentDate - startDate;
  const dayInMilliseconds = 1000 * 3600 * 24;

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
    <Container className="container-color-scheme text-align-left container-spacing">
      <Row>
        <Col md={8}>
          <Col>
            <h1>{props.thisProjectHere.name}</h1>
            <h5>Started at: {parsedDate}</h5>
            {/* {props.thisProjectHere.completion_date.length > 0 ? (
              <h5>Completed On: {endDate}</h5>
            ) : elapsedTime } */}
          </Col>
          <Col></Col>
          {/* function to add these umns for brine if brines are present in the project */}
          {renderBrines(props.thisProjectHere.brines)}
          <div className="timeline-label">Ingredients:</div>
          <div className="container-color-scheme">
            {renderIngredients(props.thisProjectHere.ingredients)}
          </div>
          <div className="text-align-center">
            Stored in:
            <p>{renderVessels(props.thisProjectHere.vessels)}</p>
            <div className="details-buttons">
              <Button
                className="form-button"
                onClick={() =>
                  history.push(`/projects/${props.thisProjectHere.id}/edit`)
                }
              >
                Edit Project
              </Button>
              {props.thisProjectHere.completed ? null : (
                <Button className="submit-button" onClick={completeProject}>
                  Complete Project
                </Button>
              )}
            </div>
          </div>
        </Col>

        <Col md={4} className="timeline-label">
          Timeline
          {props.thisProjectHere.completed ? (
            <CompletedProjectTimeline
              notes={props.notes}
              project={props.thisProjectHere}
            />
          ) : (
            <ProjectTimeline
              notes={props.notes}
              project={props.thisProjectHere}
            />
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
    notes: state.project.projects.find(
      (project) => project.id == ownProps.match.params.id
    ).notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitProject: (project) => updateProject(project)(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
