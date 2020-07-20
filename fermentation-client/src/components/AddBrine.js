import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const AddBrine = (props) => {
  const createTextFields = () => {
    return props.brines.map((brine, index) => {
      return (
        <>
          <Row>
            <Col md={2} className="form-labels">
              Brine
            </Col>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>Liquid Amount</Form.Label>
                  <Form.Control
                    name="brine"
                    placeholder="Liquid Amount"
                    type="number"
                    value={brine.amount}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Units</Form.Label>
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
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>Salt Percentage</Form.Label>
                  <Form.Control
                    name="salt"
                    placeholder="Salt Content"
                    type="number"
                    value={brine.salt}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Sugar Percentage</Form.Label>
                  <Form.Control
                    name="sugar"
                    placeholder="Added Sugar?"
                    type="number"
                    value={brine.sugar}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </>
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

  // const onNewBrine = () => {
  //   props.setBrines([...props.brines, { brine: "", quantity: null }]);
  // };

  return (
    <div className="form-outline">
      <div>{createTextFields()}</div>
      {/* More than one?
      <button type='button' onClick={() => onNewBrine()}>+ New Brine</button> */}
    </div>
  );
};

export default AddBrine;
