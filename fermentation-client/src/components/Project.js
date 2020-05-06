import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
// import { CardText } from "react-bootstrap/Card";
import ProjectTimeline from "../containers/ProjectTimeline";
import ProjectDetails from "./ProjectDetails";

const mapIngredients = (ingredients) => {
  return ingredients.map((ingredient) => (
    <div>
      {ingredient.quantity} {ingredient.units} {ingredient.name}{" "}
      {ingredient.prep}
    </div>
  ));
};

const Project = (props) => {
  const [viewTimeline, setView] = useState({ show: false });
  const {
    name,
    // quantity,
    // units,
    user,
    ingredients,
    // notes,
    // vessels,
  } = props.project;

  const { allNotes } = props;

  return (
    <div>
      <Col className="justify-content-center" lg={6}>
        <Card bg="dark" text="white" style={{ width: "10rem" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>by {user.first_name}</Card.Subtitle>
          <Card.Body>{mapIngredients(ingredients)}</Card.Body>
          <Button onClick={() => setView({ show: !viewTimeline.show })}>
            View Timeline
          </Button>
        </Card>
      </Col>
          {viewTimeline.show ? (
            <ProjectDetails project={props.project} />
          ) : null}
    </div>
  );
};

export default Project;
