import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const EditVessels = (props) => {
  const createTextFields = () => {
    return props.vessels.map((vessel, index) => {
      return (
        <>
          <Row>
            <Col md={2}>Vessel {index + 1}</Col>
            <Form.Row key={index}>
              <Col></Col>
              <Form>
                <Row>
                  <Form.Group as={Col}>
                    <Form.Label>Vessel Type</Form.Label>
                    <Form.Control
                      name="vessel"
                      placeholder="Name"
                      type="text"
                      value={vessel.vessel}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Material</Form.Label>
                    <Form.Control
                      name="material"
                      placeholder="What is it made out of?"
                      type="text"
                      value={vessel.material}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col}>
                    <Form.Label>Volume</Form.Label>
                    <Form.Control
                      name="volume"
                      placeholder="Volume"
                      type="text"
                      value={vessel.volume}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Units</Form.Label>
                    <Form.Control
                      name="units"
                      placeholder="Units"
                      type="text"
                      value={vessel.units}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                </Row>
              </Form>
            </Form.Row>
          </Row>
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
    <div className="form-outline">
      <div>{createTextFields()}</div>
      <button type="button" onClick={() => onNewVessel()}>
        + New Vessel
      </button>
    </div>
  );
};

export default EditVessels;
