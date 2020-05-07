import React from "react";
import { Col, Row, Form } from "react-bootstrap";

const AddBrine = (props) => {

  const createTextFields = () => {
    return props.brines.map((brine, index) => {
      return (
        <div className='form-outline'>
          <Form.Label>Brine</Form.Label>
          <Form.Row key={index}>
            <Col></Col>
            <Col md={3}>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="brine"
                    placeholder="Liquid Amount"
                    type="number"
                    value={brine.amount}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="units"
                    placeholder="Units"
                    type="text"
                    value={brine.units}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col md={3}>
              <Form>
                <Form.Group>
                  <Form.Control
                    name="salt"
                    placeholder="Salt Content"
                    type="number"
                    value={brine.salt}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="sugar"
                    placeholder="Added Sugar?"
                    type="number"
                    value={brine.units}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col></Col>
          </Form.Row>
          <Form></Form>
        </div>
      );
    });
  };

  const handleChange = (event, BrineIndex) => {
    const fieldName = event.target.name;
    const brineName = event.target.value;
    props.setBrines(
      props.brines.map((brine, index) => {
        if (index === BrineIndex) {
          return { ...brine, [fieldName]: brineName };
        }
        return brine;
      })
      );
  };

  const onNewBrine = () => {
    props.setBrines([...props.brines, { brine: "", quantity: null }]);
  };

  return (
    <div>
      <div>{createTextFields()}</div>
      {/* More than one?
      <button type='button' onClick={() => onNewBrine()}>+ New Brine</button> */}
    </div>
  );
};

export default AddBrine;
