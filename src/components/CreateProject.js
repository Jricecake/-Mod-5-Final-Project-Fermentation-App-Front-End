import React, { useState, useReducer } from "react";
import AddIngredients from "./AddIngredients";
import AddVessel from "./AddVessel";
import AddBrine from "./AddBrine";
import { Form, Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { postProject } from "../redux";

const CreateProject = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ChangeField":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case "EmptyField":
        return {
          name: "",
          end_date: "",
          user_id: props.currentUser.id,
        };
    }
  };
  const [ingredients, setIngredients] = useState([{}]);
  const [brines, setBrines] = useState([{}]);
  const [vessels, setVessels] = useState([{}]);
  const [project, setProject] = useReducer(reducer, {
    name: "",
    end_date: "",
    user_id: props.currentUser.id,
  });

  const handleChange = (event, stateIndex) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setProject({
      type: "ChangeField",
      payload: { field: fieldName, value: value },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      ...project,
      ingredients: [...ingredients],
      vessels: [...vessels],
    };
    props.onAddProject(newProject);
    props.closeForm();
    // redirect here?
  };

  return (
    <Container className="sub-container-color-scheme">
      <Row className="light-bottom-padding justify-content-center">
        <h3>Create New Project!</h3>
      </Row>
      <Row className="justify-content-center">
        <Form>
          <Form.Row>
            <Col>
              <Form.Group controlId="projectForm" className="text-align-center">
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  type="text"
                  value={project.name}
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
        {/* {createTextFields()}
        <button type="button" onClick={onNewIngredient}>
          + New Ingredient
        </button> */}
      </Row>
      <AddIngredients
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <AddVessel vessels={vessels} setVessels={setVessels} />
      <AddBrine brines={brines} setBrines={setBrines} />
      <div className='bottom-buttons'>
        <button type="submit" onClick={handleSubmit}>
          Create!
        </button>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProject: (projectFromState) => postProject(projectFromState)(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
