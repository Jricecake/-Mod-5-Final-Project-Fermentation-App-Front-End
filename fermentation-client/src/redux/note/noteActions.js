import { ADD_NOTE, FETCH_NOTES_FAILURE, FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS } from './noteTypes'
const NOTES_URL = 'http://localhost:3000/api/v1/notes'

export const fetchNotesRequest = () => {
  return {
    type: FETCH_NOTES_REQUEST
  }
}

export const fetchNotesFailure = error => {
  return {
    type: FETCH_NOTES_FAILURE,
    error: error
  }
}
export const fetchNotesSuccess = notes => {
  return {
    type: FETCH_NOTES_SUCCESS,
    payload: notes
  }
}

export const fetchNotes = () => {
  return (dispatch) => {
    dispatch(fetchNotesRequest())
    fetch(NOTES_URL)
      .then (res => res.json())
      .then(data => {
        if (data.error){
          dispatch(fetchNotesFailure(data.error))
        } else {
          dispatch(fetchNotesSuccess(data))
        }
      }) 
    }
  };

  export const mapNotesToProjectId = (state) =>{
    let notesObject = {}
    state.map(note => {
      if (!notesObject[`${note.project_id}`]) {
        notesObject[`${note.project_id}`] = [note]
      } else {
        notesObject[`${note.project_id}`].push(note)
      }
    })
    return notesObject
  }

// export const addNote = (note, projectId) => {
//   return {
//     type: ADD_NOTE,
//     note,
//     projectId
//   };
// };