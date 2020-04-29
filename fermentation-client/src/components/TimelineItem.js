import React, { useState } from "react";
import AddNote from "./AddNote";

const TimelineItem = (props) => {
  const [showButton, setShowButton] = useState(false);

  const generateWarning = () => {
    if (props.id > 0 && props.id % 3 === 0) {
      return <div>Warning! Check for pressure</div>;
    }
  };

  const handleShow = () => {
    setShowButton(!showButton);
  };
  return (
    <div className="timeline-day">
      {generateWarning()}
      <span className="day-display">{`Day ${props.id}`}</span>
      {props.notes ? props.notes.map(note => <div>{note.text}</div>) : null}
      <button onClick={handleShow}></button>
      {showButton ? <AddNote project_id={props.project_id} /> : null}
    </div>
  );
};

export default TimelineItem;
