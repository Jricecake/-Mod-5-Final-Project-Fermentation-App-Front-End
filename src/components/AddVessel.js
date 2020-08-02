import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const AddVessel = (props) => {
  const createTextFields = () => {
    return props.vessels.map((vessel, index) => {
      return (
        <Row>
          <Col className='form-labels' md={2}>Vessel {index + 1}</Col>

          <Col>
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
          </Col>
        </Row>
      );
    });
  };

  const handleChange = (event, vesselIndex) => {
    const fieldName = event.target.name;
    const vesselName = event.target.value;
    props.setVessels(
      props.vessels.map((vessel, index) => {
        if (index === vesselIndex) {
          return { ...vessel, [fieldName]: vesselName };
        }
        return vessel;
      })
    );
  };

  const onNewvessel = () => {
    props.setVessels([...props.vessels, { vessel: "", quantity: null }]);
  };

  return (
    <div className="form-outline">
      {createTextFields()}
      <div className='justify-content-center'>

      <button type="button" className='form-button' onClick={() => onNewvessel()}>
        Add Vessel
      </button>
      </div>
    </div>
  );
};

export default AddVessel;
