import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import { updateProject, deleteProject } from "../redux";
import EditIngredients from "./EditIngredients";
import EditVessels from "./EditVessels";
import { Button, Modal, Container } from "react-bootstrap";

const EditProject = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ChangeField":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case "EmptyField":
        return {
          name: "",
          end_date: "",
          user_id: props.currentUser.id,
        };
    }
  };
  const [project, setProject] = useReducer(reducer, {
    name: props.thisProject.name,
    end_date: props.thisProject.end_date,
    id: props.thisProject.id,
  });
  const [removeProject, setRemoveProject] = useState(false);
  const [ingredients, setIngredients] = useState([
    ...props.thisProject.ingredients,
  ]);
  const [vessels, setVessels] = useState([...props.thisProject.vessels]);

  const handleChange = (event, stateIndex) => {
    setProject({
      type: "ChangeField",
      payload: { field: event.target.name, value: event.target.value },
    });
  };

  const handleShow = () => setRemoveProject(!removeProject);

  const handleDeleteProject = () => {
    console.log("delete button clicked");
    props.deleteProject(props.thisProject.id);
    props.history.push("/projects");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const changedProject = {
      ...project,
      ingredients_attributes: ingredients,
      vessels_attributes: vessels,
    };
    console.log(changedProject);
    props.onSubmit(changedProject);
    props.history.push(`/project/${props.thisProject.id}`);
  };
  return (
    <Container>
      <div>
        Edit this Project
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="end_date"
          value={project.end_date}
          onChange={handleChange}
        ></input>
        <div>
          <EditIngredients
            ingredients={ingredients}
            changeIngredients={setIngredients}
          />
          <EditVessels vessels={vessels} changeVessels={setVessels} />
        </div>
        <Button variant="danger" onClick={handleShow}>
          Delete Project
        </Button>
        <Modal show={removeProject} onHide={handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Project?</Modal.Title>
          </Modal.Header>
          <Modal.Body>This cannot be undone.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Cancel
            </Button>
            <button type="submit" onClick={handleSubmit}>
              Submit Changes
            </button>
            <Button variant="danger" onClick={handleDeleteProject}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  thisProject: state.project.projects.find(
    (project) => project.id == ownProps.match.params.id
  ),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (project) => updateProject(project)(dispatch),
    deleteProject: (project_id) => deleteProject(project_id)(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
