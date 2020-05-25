import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateProject } from "../redux";
import EditIngredients from "./EditIngredients";

const EditProject = (props) => {
  console.log(props.thisProject);
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
    ingredients: props.thisProject.ingredients
  });

  const handleChange = (event, stateIndex) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setProject({
      type: "ChangeField",
      payload: { field: event.target.name, value: event.target.value },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const changedProject = {
      name: event.target.name,
      end_date: event.target.end_date,
      id: props.thisProject.id,
    };
    props.onSubmit(project);
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
        <EditIngredients ingredients={project.ingredients} changeIngredients={setProject}/>
      </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
