import React from "react";
import { Card, ListGroup} from "react-bootstrap";
import { useHistory } from "react-router";


const mapIngredients = (ingredients) => {
  return ingredients.map((ingredient) => (
    <ListGroup.Item variant='success'>
      {ingredient.quantity} {ingredient.units} {ingredient.name}{" "}
      {ingredient.prep}
    </ListGroup.Item>
  ));
};

const Project = (props) => {
  const history = useHistory();
  const { name, id, ingredients } = props.project;

  const pushToDetails = () => {
    history.push(`/project/${id}`);
  };

  return (
    <Card
      className="card-color-scheme project-card shadow-pop-br"
      style={{ width: "10rem" }}
      onClick={pushToDetails}
    >
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        <ListGroup>

        {mapIngredients(ingredients)}
        </ListGroup>
        </Card.Body>
      {/* <button className='project-detail-button' onClick={pushToDetails}>View Project Details</button> */}
    </Card>
  );
};

export default Project;
