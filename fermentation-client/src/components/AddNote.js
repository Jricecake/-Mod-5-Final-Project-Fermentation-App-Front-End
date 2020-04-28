
import React, { useState } from 'react'

function AddNote() {

  const [note, setNote] = useState('')

  const handleChange = (event) => {
    console.log(event.target.value)
    console.log(note)
    setNote(event.target.value)
  }
  

  return(
    <div>
      Add Note:
      <form>
      <input name='note' type='text' value={note} onChange={(event) => handleChange(event)}></input>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default AddNote