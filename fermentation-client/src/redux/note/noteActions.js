import { api } from '../../services/api'
import {
  ADD_NOTE,
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  POST_NOTE_SUCCESS
} from "./noteTypes";
const NOTES_URL = "http://localhost:3000/api/v1/notes";

export const fetchNotesRequest = () => {
  return {
    type: FETCH_NOTES_REQUEST,
  };
};

export const fetchNotesFailure = (error) => {
  return {
    type: FETCH_NOTES_FAILURE,
    error: error,
  };
};
export const fetchNotesSuccess = (notes) => {
  return {
    type: FETCH_NOTES_SUCCESS,
    payload: notes,
  };
};

export const postNoteSuccess = (newNote) => {
  return {
    type: POST_NOTE_SUCCESS,
    payload: newNote
  }
}

export const fetchNotes = () => {
  return (dispatch) => {
    dispatch(fetchNotesRequest());
    api.note.getNotes()
      .then((data) => {
        if (data.error) {
          dispatch(fetchNotesFailure(data.error));
        } else {
          console.log(data)
          dispatch(fetchNotesSuccess(data));
        }
      });
  };
};
export const postNote = (newNote) => {
  return (dispatch) => {
    dispatch(fetchNotesRequest());
    api.note.createNote(newNote)
      .then((data) => {
        if (data.error) {
          dispatch(fetchNotesFailure(data.error));
        } else {
          console.log(data.note)
          dispatch(postNoteSuccess(data.note));
        }
      });
  };
};

export const mapNotesToProjectId = (state) => {
  let notesObject = {};
  state.map((note) => {
    if (!notesObject[`${note.project_id}`]) {
      notesObject[`${note.project_id}`] = [note];
    } else {
      notesObject[`${note.project_id}`].push(note);
    }
  });
  return notesObject;
};
