import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router"; 
import { Redirect } from 'react-router-dom'
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
  const history = useHistory();
  const [viewTimeline, setView] = useState({ show: false });
  const {
    name,
    id,
    user,
    ingredients,
  } = props.project;


  
  const pushToDetails = () => {
    console.log(history)
    history.push(`project/${id}`)
  }

  return (
    <div>
      <Col className="justify-content-center" lg={6}>
        <Card bg="dark" text="white" style={{ width: "10rem" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>by {user.first_name}</Card.Subtitle>
          <Card.Body>{mapIngredients(ingredients)}</Card.Body>
          <Button onClick={pushToDetails}>
            View Project Details
          </Button>
        </Card>
      </Col>
         
    </div>
  );
};

export default Project;
