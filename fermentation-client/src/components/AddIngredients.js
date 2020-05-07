import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";

const AddIngredient = (props) => {
  const createTextFields = () => {
    return props.ingredients.map((ingredient, index) => {
      return (
        <>
          <Form.Label>Ingredient {index + 1}</Form.Label>
          <Form.Row key={index}>
            <Col></Col>
            <Col md={4}>
              <Form>
                <Form.Group>
                  {/* <Form.Label>Ingredient Name</Form.Label> */}
                  <Form.Control
                    size="sm"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={ingredient.name}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
                <Form.Group>
                  {/* <Form.Label>Quantity</Form.Label> */}
                  <Form.Control
                    size="sm"
                    name="quantity"
                    placeholder="Quantity"
                    type="text"
                    value={ingredient.quantity}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col md={4}>
              <Form>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    name="units"
                    placeholder="Units"
                    type="text"
                    value={ingredient.units}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    name="prep"
                    placeholder="How was it prepared?"
                    type="text"
                    value={ingredient.prep}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col></Col>
          </Form.Row>
        </>
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
    <div className='form-outline'>
      <div>{createTextFields()}</div>
      <button type="button" onClick={() => onNewIngredient()}>
        + New Ingredient
      </button>
    </div>
  );
};

export default AddIngredient;
