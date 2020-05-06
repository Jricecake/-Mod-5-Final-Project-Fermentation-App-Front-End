import React from "react";


const AddBrine = (props) => {

  const createTextFields = () => {
    return props.brines.map((brine, index) => {
      return (
        <div key={index}>
          <label>Brine {index + 1}</label>
          <label>Type</label>
          <input
            name="brine"
            type="text"
            value={brine.name}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Volume</label>
          <input
            name="quantity"
            type="number"
            value={brine.quantity}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Units</label>
          <input
            name="units"
            type="text"
            value={brine.units}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Material</label>
          <input
            name="material"
            type="text"
            value={brine.material}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Notes</label>
          <input
            name="notes"
            type="text"
            value={brine.notes}
            onChange={(e) => handleChange(e, index)}
          />
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
      More than one?
      <button type='button' onClick={() => onNewBrine()}>+ New Brine</button>
    </div>
  );
};

export default AddBrine;
