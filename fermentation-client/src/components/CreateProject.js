import React, { Component, useState, useReducer } from "react";
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
        <button type="submit">Create!</button>
      </form>
    </div>
  );
};

export default CreateProject;
