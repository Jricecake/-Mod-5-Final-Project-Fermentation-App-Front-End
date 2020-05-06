import React, { useState } from "react";
import { connect } from "react-redux";

const AddIngredient = (props) => {
  const createTextFields = () => {
    return props.ingredients.map((ingredient, index) => {
      return (
        <div key={index}>
          <label>Ingredient {index + 1}</label>
          <label>Name</label>
          <input
            name="name"
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

  const handleChange = (event, ingredientIndex) => {
    const fieldName = event.target.name;
    const ingredientName = event.target.value;
    props.setIngredients(
      props.ingredients.map((ingredient, index) => {
        if (index === ingredientIndex) {
          return { ...ingredient, [fieldName]: ingredientName };
        }
        return ingredient;
      })
    );
  };

  const onNewIngredient = () => {
    props.setIngredients([...props.ingredients, { name: "", quantity: null }]);
  };

  return (
    <div>
      <div>{createTextFields()}</div>
      <button type="button" onClick={() => onNewIngredient()}>
        + New Ingredient
      </button>
    </div>
  );
};

export default AddIngredient;
