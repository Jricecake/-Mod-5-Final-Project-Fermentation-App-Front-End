import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";

const EditVessels = (props) => {


  const createTextFields = () => {
    return props.vessels.map((vessel, index) => {
      return (
        <>
          <Form.Label>Vessel {index + 1}</Form.Label>
          <Form.Row key={index}>
            <Col></Col>
            <Col md={4}>
              <Form>
                <Form.Group>
                  {/* <Form.Label>Ingredient Name</Form.Label> */}
                  <Form.Control
                    size="sm"
                    name="vessel"
                    placeholder="Name"
                    type="text"
                    value={vessel.vessel}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    name="material"
                    placeholder="Material?"
                    type="text"
                    value={vessel.material}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
                
              </Form>
            </Col>
            <Col md={4}>
              <Form>
              <Form.Group>
                  {/* <Form.Label>Quantity</Form.Label> */}
                  <Form.Control
                    size="sm"
                    name="volume"
                    placeholder="Volume"
                    type="text"
                    value={vessel.volume}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    name="units"
                    placeholder="Units"
                    type="text"
                    value={vessel.units}
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

  const handleChange = (event, vesselIndex) => {
    const fieldName = event.target.name;
    props.changeVessels(
      props.vessels.map((vessel, index) => {
        if (index === vesselIndex) {
          return { ...vessel, [fieldName]: event.target.value };
        }
        return vessel;
      })
    );
  };

  const onNewVessel = () => {
    props.changeVessels([...props.vessels, { name: "", quantity: null }]);
  };

  return (
    <div className='form-outline'>
      <div>{createTextFields()}</div>
      <button type="button" onClick={() => onNewVessel()}>
        + New Vessel
      </button>
    </div>
  );
};

export default EditVessels;
