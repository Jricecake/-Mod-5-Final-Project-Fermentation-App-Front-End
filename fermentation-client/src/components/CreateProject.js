import React, { useState, useReducer } from "react";
import AddIngredients from "./AddIngredients";
import AddVessel from "./AddVessel";
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
  const [vessels, setVessels] = useState([])

  const [project, setProject] = useReducer(reducer, {
    name: "",
    end_date: "",
    user_id: 3,
  });

  const handleChange = (event, stateIndex) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    if (fieldName === "ingredient") {
      setProject({
        ...project,
        ingredients: project.ingredients.map((ingredient, index) => {
          if (index === stateIndex) {
            return { ...ingredient, [fieldName]: value };
          }
          return ingredient;
        }),
      });
    } else if (fieldName === "vessel") {
      setProject({
        ...project,
        vessels: project.vessels.map((vessel, index) => {
          if (index === stateIndex) {
            return { ...vessel, [fieldName]: value };
          }
          return vessel;
        }),
      });
    }
    setProject({
      field: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      ...project,
      ingredients: [...ingredients.ingredients],
      vessels: [...vessels.vessels]
    }
    console.log(newProject)
    props.onAddProject(newProject);
    setProject({ name: "", date: "" });
    // redirect here?
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
        <AddVessel changeState={setVessels}/>
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
