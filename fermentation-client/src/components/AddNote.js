import { connect } from 'react-redux'
import React, { useState } from 'react'

function AddNote() {

  const [note, setNote] = useState('')

  const handleChange = (event) => {
    setNote(event.target.value)
  }
  
  const handleSubmit = (event) => {
    // this.props.store.dispatch(addNote)
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

const mapDispatchToProps = () => {

}

export default connect(null, mapDispatchToProps)(AddNote)