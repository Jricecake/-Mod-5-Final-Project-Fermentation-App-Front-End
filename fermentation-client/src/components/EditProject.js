import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateProject, deleteProject } from "../redux";
import EditIngredients from "./EditIngredients";
import { Button, Modal } from "react-bootstrap";

const EditProject = (props) => {
  const history = useHistory();

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

  const handleChange = (event, stateIndex) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setProject({
      type: "ChangeField",
      payload: { field: event.target.name, value: event.target.value },
    });
  };

  const handleShow = () => setRemoveProject(!removeProject);

  const handleDeleteProject = () => {
    console.log("delete button clicked")
    props.deleteProject(props.thisProject.id)
    props.history.push('/projects')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const changedProject = {
      ...project,
      ingredients_attributes: ingredients,
    };
    console.log(changedProject);
    props.onSubmit(changedProject);
    props.history.push(`/project/${props.thisProject.id}`);
  };
  return (
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
      <button type="submit" onClick={handleSubmit}>
        Submit Changes
      </button>
      <div>
        <EditIngredients
          ingredients={ingredients}
          changeIngredients={setIngredients}
        />
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
            <Button variant='secondary' onClick={handleShow}>Cancel</Button>
            <Button variant='danger' onClick={handleDeleteProject}>Delete</Button>
          </Modal.Footer>
      </Modal>
    </div>
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
