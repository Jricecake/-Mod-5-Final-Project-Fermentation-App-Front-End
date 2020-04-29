import {
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS
} from './noteTypes'

const initialState = {
  notes: []
}

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
        notes: action.payload,
      };
    // case ADD_NOTE:
    //   return {
    //     ...state,
    //     data: [...state.data, action.payload],
    //   };
    default:
      return state;
  }
};

export default noteReducer;
