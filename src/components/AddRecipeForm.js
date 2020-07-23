import React, { useReducer } from "react";
import { render } from "@testing-library/react";
const maxChars = 80;
const smallertextareastyle = {
  padding: "9px",
  boxSizing: "border-box",
  fontSize: "15px",
  minHeight: "100px",
  minWidth: "300px",
};
const AddRecipeForm = (props) => {
  const [recipe, setRecipe] = useReducer(
    (recipe, newRecipe) => ({ ...recipe, ...newRecipe }),
    {
      title: "",
      image_url: "",
      summary: "",
      ingredients: [{ name: "", amount: "" }],
      steps: [],
      tags: [],
      charsLeft: maxChars,
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ [name]: value });
  };
  let totalSteps = 0;

  const handleAddStep = (e) => {
    console.log(e.target);
    e.preventDefault();
    setRecipe({
      ...recipe,
      steps: [...recipe.steps, { 
       name: '', // name iterated from previous step
       value: '' }], //controlled
    });
  };

  const stepsMapper = () => {
    console.log(recipe.steps);
    return recipe.steps.map((step, index) => {
      const stepNumber = index + 1;
      return (
        <div key={index}>
          <textarea
            name={stepNumber}
            placeholder={stepNumber}
            value={recipe.steps[stepNumber]}
            onChange={handleChange}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <form>
        <label>Title</label>
        <br></br>
        <input
          type="text"
          onChange={handleChange}
          value={recipe.title}
          name="title"
        ></input>
        <br></br>
        <br></br>
        <label>Steps</label>
        <textarea
          name={0}
          placeholder={recipe.steps[0]}
          value={recipe.steps[0]}
          onChange={handleChange}
        />
        <br></br>
        {stepsMapper()}
        <button onClick={(e) => handleAddStep(e)}>Add a new Step</button> */}
      </form>
    </div>
  );
};
export default AddRecipeForm;
