import { connect } from 'react-redux'
import React, { useState } from 'react'
import { addNote } from '../redux/project/projectActions'

function AddNote(props) {

  const [note, setNote] = useState('')

  const handleChange = (event) => {
    setNote(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(note)
    props.addNote(note, props.projectId)
  }

  return(
    <div>
      Add Note:
      <form>
      <input name='note' type='text' value={note} onChange={(event) => handleChange(event)}></input>
      <button type='submit' onClick={(event) => handleSubmit(event)}>Submit</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return{
    addNote: (note, id) => dispatch({ type: 'ADD_NOTE', payload: note, id})
  }
}

export default connect(null, mapDispatchToProps)(AddNote)