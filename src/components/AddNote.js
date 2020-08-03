import { connect } from "react-redux";
import React, { useState } from "react";
import { postNote } from "../redux"
import { Form, Button } from 'react-bootstrap'

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
    setNote({text: ''})
    props.handleShow()
  };

  return (
    <div>
      Add Note:
      <Form>
        <Form.Control
        size='sm'
          name="text"
          type="text"
          value={note.text}
          onChange={(event) => handleChange(event)}
        />
        <Button className='note-add-button' bsPrefix='btn-xs' type="submit" onClick={(event) => handleSubmit(event)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNote: (noteFromState) => postNote(noteFromState)(dispatch)
  };
};

export default connect(null, mapDispatchToProps)(AddNote);
