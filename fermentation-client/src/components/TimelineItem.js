import React from 'react'
import AddNote from "./AddNote";
const TimelineItem = (props) => {

const generateWarning = () => {
  if (props.id > 0 && props.id % 3 == 0){
    return <div>Warning! Check for pressure</div>
  }
}

  return(
    <div className=''>
      {generateWarning()}
      {props.id}
      {props.notes? props.notes.text : null}
      <AddNote/>
    </div>
  )
}

export default TimelineItem