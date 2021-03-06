import {
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  ADD_NOTE,
  POST_NOTE_SUCCESS,
} from "./noteTypes";

const initialState = {
  notes: [],
  loading: false,
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        notes: [...action.payload],
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case POST_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        notes: [...state.notes, action.payload],
      };
    default: {
      return state;
    }
  }
};

export default noteReducer;
