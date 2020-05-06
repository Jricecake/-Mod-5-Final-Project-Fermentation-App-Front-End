import React, {useState} from "react";
import { connect } from 'react-redux'
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const renderIngredients = (array) => {
  return array.map((ingredient) => {
    console.log(ingredient);
    return (
      <Card>
        <Card.Title>{ingredient.name}</Card.Title>
        <Card.Subtitle>{`${ingredient.quantity} ${ingredient.units}`}</Card.Subtitle>
      </Card>
    );
  });
};

const renderVessels = (array) => {
  return array.map((vessel) => {
    return `${vessel.volume} ${vessel.units} ${vessel.name}`;
  });
};

function ProjectDetails(props) {

  const [project, setProject] = useState({})
  
  const findProject = (props) =>{
    const foundProject = props.allProjects.filter((project) => 
    {return project.id === props.match.params.id})
    setProject(foundProject)
  }
  findProject()
  

  return (
    <Container className="justify-content-center">
      {/* <h1>{props.project.name}</h1> */}
      <br />
      {/* <h3>{props.project.created_at}</h3> */}
      <Row>Project Details</Row>
      {/* <Row>Stored in: {renderVessels(props.project.vessels)}</Row> */}
      <Row>Ingredients:</Row>
      {/* <Row>{renderIngredients(props.project.ingredients)}</Row> */}
    </Container>
  );
}


const mapStateToProps = (state) =>{
  return {
    allProjects: state.project.projects
  }
}

export default connect(mapStateToProps, null)(ProjectDetails)