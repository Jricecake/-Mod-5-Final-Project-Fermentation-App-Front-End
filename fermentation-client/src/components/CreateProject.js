import React, { Component, useState, useReducer } from "react";


function reducer(state, {field, value}){
  return {
    ...state,
    [field]: value
  }
}

const initialState = {
  projectname: "",
  date: "",
  vessel: "",
}

const createProject = () => {
  const [userInput, setUserInput] = useReducer(reducer, initialState
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    setUserInput({ [name]: newValue });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="projectname"
          value={userInput.projectname}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default createProject;
