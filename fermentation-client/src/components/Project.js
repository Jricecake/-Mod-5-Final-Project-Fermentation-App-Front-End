import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CardText } from "react-bootstrap/Card";

let projectObject = {
  name: "Kimchi",
  end_date: "04/30/20",
  user_id: "1",
};

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
    quantity,
    units,
    user,
    ingredients,
    notes,
    vessels,
  } = props.project;
  console.log(ingredients);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>by {user.first_name}</Card.Subtitle>
      <Card.Body>
        {mapIngredients(ingredients)}
      </Card.Body>
    </Card>
  );
};

export default Project;
