import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router";

import { Redirect } from "react-router-dom";
// import { CardText } from "react-bootstrap/Card";
import ProjectTimeline from "../containers/ProjectTimeline";
import ProjectDetails from "./ProjectDetails";

const mapIngredients = (ingredients) => {
  return ingredients.map((ingredient) => (
    <li>
      {ingredient.name}
    </li>
  ));
};

const Project = (props) => {
  const history = useHistory();
  const [viewTimeline, setView] = useState({ show: false });
  const { name, id, user, ingredients } = props.project;

  const pushToDetails = () => {
    history.push(`/project/${id}`)
  }

  return (
  
      
        <Card bg="dark" text="white" className='project-card' style={{ width: "10rem" }}  onClick={pushToDetails}>
          <Card.Title>{name}</Card.Title>
          <Card.Body>
          <ul>
            {mapIngredients(ingredients)}

          </ul>
            </Card.Body>
          {/* <button className='project-detail-button' onClick={pushToDetails}>View Project Details</button> */}
        </Card>

  );
};

export default Project;
