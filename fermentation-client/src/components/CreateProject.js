import React, { Component, useState, useReducer } from "react";
import AddIngredients from './AddIngredients'
import { connect } from "react-redux";

const CreateProject = () => {
  const reducer = (state, { field, value }) => {
    return {
      ...state,
      [field]: value,
    };
  };

  const [project, setProject] = useReducer(reducer, { name: "", date: "" });

  const handleChange = (event) => {
    setProject({
      field: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
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
          name="date"
          onChange={handleChange}
        />
        <AddIngredients />
        <button type="submit" onClick={handleSubmit}>Create!</button>
      </form>
    </div>
  );
};

export default CreateProject;
