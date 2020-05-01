import React, { Component, useState, useReducer } from "react";
import { connect } from "react-redux";

const AddIngredient = () => {
  const [ingredient, setIngredient] = useState({

  })
  
  return (
    <div>
      <input
        type="text"
        value={val}
        name={projectId}
        onChange={handleChange}
      />
      <input
        value={val}
        type="text"
        name={textId}
        onChange={handleChange}
      />
    </div>
  );
  
  export default AddIngredient;
}
