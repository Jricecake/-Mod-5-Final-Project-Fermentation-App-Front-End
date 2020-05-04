import React, { Component, useState, useReducer } from "react";
import AddIngredients from "./AddIngredients";
import { connect } from "react-redux";
import { postProject } from "../redux";

const CreateProject = (props) => {
  const reducer = (state, { field, value }) => {
    return {
      ...state,
      [field]: value,
    };
  };
  const [ingredients, setIngredients] = useState([])

  const [project, setProject] = useReducer(reducer, {
    name: "",
    end_date: "",
    user_id: 3,
  });

  const handleChange = (event, ingredientIndex) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    if (fieldName === "ingredient") {
      setProject({
        ...project,
        ingredients: project.ingredients.map((ingredient, index) => {
          if (index === ingredientIndex) {
            return { ...ingredient, [fieldName]: value };
          }
          return ingredient;
        }),
      });
    }
    setProject({
      field: event.target.name,
      value: event.target.value,
    });
  };

  const createTextFields = () => {
    return project.ingredients.map((ingredient, index) => {
      return (
        <div key={index}>
          <label>Ingredient {index + 1}</label>
          <label>Name</label>
          <input
            name="ingredient"
            type="text"
            value={ingredient.name}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Quantity</label>
          <input
            name="quantity"
            type="text"
            value={ingredient.quantity}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Prep</label>
          <input
            name="prep"
            type="text"
            value={ingredient.prep}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      );
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      ...project,
      ingredients: [...ingredients.ingredients]
    }
    console.log(newProject)
    props.onAddProject(newProject);
    setProject({ name: "", date: "" });
    // redirect here?
  };

  const onNewIngredient = () => {
    setProject({
      ingredients: "hello"
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
          name="end_date"
          onChange={handleChange}
        />
        {/* {createTextFields()}
        <button type="button" onClick={onNewIngredient}>
          + New Ingredient
        </button> */}
        <AddIngredients changeState={setIngredients}/>
        <button type="submit" onClick={handleSubmit}>
          Create!
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProject: (projectFromState) => postProject(projectFromState)(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
