import React from "react";
import { Card } from "react-bootstrap";
// import { CardText } from "react-bootstrap/Card";
import ProjectTimeline from "../containers/ProjectTimeline";

const mapIngredients = (ingredients) => {
  return ingredients.map((ingredient) => (
    <div>
      {ingredient.quantity} {ingredient.units} {ingredient.name}{" "}
      {ingredient.prep}
    </div>
  ));
};

const Project = (props) => {
  const {
    name,
    // quantity,
    // units,
    user,
    ingredients,
    notes,
    // vessels,
  } = props.project;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>by {user.first_name}</Card.Subtitle>
        <Card.Body>{mapIngredients(ingredients)}</Card.Body>
      </Card>
      <ProjectTimeline project={props.project} notes={notes}/>
    </div>
  );
};

export default Project;
