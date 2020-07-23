import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const AddIngredient = (props) => {
  const createTextFields = () => {
    return props.ingredients.map((ingredient, index) => {
      return (
        <>
          <Row>
            <Col md={2} className="form-labels">Ingredient {index + 1}</Col>
            <Col>
              <Form>
                <Row>
                  <Form.Group as={Col}>
                    <Form.Label>Ingredient Name</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      value={ingredient.name}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Preparation</Form.Label>
                    <Form.Control
                      name="prep"
                      type="text"
                      value={ingredient.prep}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                </Row>

                {/* <Form.Label>Quantity</Form.Label> */}
                <Row>
                  <Form.Group as={Col}>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      name="quantity"
                      type="text"
                      value={ingredient.quantity}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Units</Form.Label>
                    <Form.Control
                      name="units"
                      type="text"
                      value={ingredient.units}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                </Row>
              </Form>
            </Col>
          </Row>
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
    <div className="form-outline">
      <div>{createTextFields()}</div>
      <button type="button" onClick={() => onNewIngredient()}>
        Add Ingredient
      </button>
    </div>
  );
};

export default AddIngredient;
