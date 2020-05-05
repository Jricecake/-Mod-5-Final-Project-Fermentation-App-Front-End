import {
  ADD_PROJECT,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from "./projectTypes";

const initialState = {
  projects: [],
  loading: false,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [action.payload],
      };
    // case ADD_PROJECT:
    //   return {
    //     ...state,
    //     data: [...state.data, action.payload],
    //   };
    default:
      return state;
  }
};

export default projectReducer;
