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
  vessel: {
    name: '',
    volume: null,
    units: '',
    airlock: false,
    weight: false,
    material: '',
    notes: ''
  },
  ingredients: []
}

function CreateProject(){
  const [state, dispatch] = useReducer(reducer, initialState
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    dispatch({ field:name, value: newValue });
  };

  const { projectname, date, vessel } = state
  return (
    <div>
      <form>
        <label>Project Name:</label>
        <input
          type="text"
          name="projectname"
          value={projectname}
          onChange={handleChange}
        />
        <label>Vessel:</label>
        <input
          type="text"
          name='vesselname'
          value={vessel.name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default CreateProject;
