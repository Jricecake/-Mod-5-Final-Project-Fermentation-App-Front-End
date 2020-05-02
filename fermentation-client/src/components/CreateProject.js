import React, { Component, useState, useReducer } from "react";
import AddIngredients from './AddIngredients'
import { connect } from "react-redux";
import { postProject } from '../redux'

const CreateProject = (props) => {
  const reducer = (state, { field, value }) => {
    return {
      ...state,
      [field]: value,
    };
  };

  const [project, setProject] = useReducer(reducer, { name: "", end_date: "", user_id: 3 });

  const handleChange = (event) => {
    setProject({
      field: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onAddProject(project)
    setProject({name: '', date: ''})
    // redirect here?
    console.log(project)
  }

  return (
    <div>
      Create New Project!
      <form>
        <label>Project Name:</label>
        <input
          type="text"
          value={project.name}
          name="name"
          onChange={handleChange}
        />
        <label>End Date:</label>
        <input
          type="text"
          value={project.date}
          name="end_date"
          onChange={handleChange}
        />
        <AddIngredients />
        <button type="submit" onClick={handleSubmit}>Create!</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProject: (projectFromState) => postProject(projectFromState)(dispatch)
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);