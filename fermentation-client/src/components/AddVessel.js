import React, { useState } from "react";
import { connect } from "react-redux";

const AddVessel = (props) => {
  // const [vessels, setVessels] = useState([{}]);
  const testStateChange = (state) => {
    console.log(state)
    props.changeState(state)
  }
  const createTextFields = () => {
    return props.vessels.map((vessel, index) => {
      return (
        <div key={index}>
          <label>Vessel {index + 1}</label>
          <label>Type</label>
          <input
            name="vessel"
            type="text"
            value={vessel.name}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Volume</label>
          <input
            name="quantity"
            type="number"
            value={vessel.quantity}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Units</label>
          <input
            name="units"
            type="text"
            value={vessel.units}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Material</label>
          <input
            name="material"
            type="text"
            value={vessel.material}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Notes</label>
          <input
            name="notes"
            type="text"
            value={vessel.notes}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
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
    <div>
      <div>{createTextFields()}</div>
      More than one?
      <button type='button' onClick={() => onNewvessel()}>+ New vessel</button>
    </div>
  );
};

export default AddVessel;
