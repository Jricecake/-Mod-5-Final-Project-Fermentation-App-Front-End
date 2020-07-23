import React from 'react';
import { useState } from 'react';

function DynamicInput() {

    const [values, setValues] = useState({ ingredients: []});

      function createInputs() {
        return values.ingredients.map((el, i) =>
          <div key={i}>
            <input type="text" value={el||''} onChange={handleChange.bind(i)} />
            <input type="text" value={el||''} onChange={handleChange.bind(i)} />

            <input type='button' value='remove' onClick={removeClick.bind(i)} />
          </div>
        );
      }

    function handleChange(event) {
      console.log(this)
      let vals = [...values.ingredients];
      vals[this] = event.target.value;
      setValues({ ingredients: vals });
    }

    const addClick = () => {
      setValues({ ingredients: [...values.ingredients, '']})
    }

    const removeClick = () => {
      let vals = [...values.ingredients];
      vals.splice(this,1);
      setValues({ ingredients: vals });
    }

    const handleSubmit = event => {
      alert('A name was submitted: ' + values.ingredients.join(', '));
      event.preventDefault();
    }

    return (
      <form onSubmit={handleSubmit}>
          {createInputs()}
          <input type='button' value='add more' onClick={addClick} />
          <input type="submit" value="Submit" />
      </form>
    );

}

export default DynamicInput;