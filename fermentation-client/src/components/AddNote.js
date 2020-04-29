import { connect } from "react-redux";
import React, { useState } from "react";
import { postNote } from "../redux"

function AddNote(props) {
  const [note, setNote] = useState({
    text: '',
    project_id: props.project_id,
    day_id: props.day_id
  });

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddNote(note);
  };

  return (
    <div>
      Add Note:
      <form>
        <input
          name="text"
          type="text"
          value={note.text}
          onChange={(event) => handleChange(event)}
        ></input>
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Submit
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNote: (noteFromState) => postNote(noteFromState)(dispatch)
  };
};

export default connect(null, mapDispatchToProps)(AddNote);
