import {
  ADD_PROJECT,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  POST_PROJECT_SUCCESS,
  REPLACE_PROJECT
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
        projects: [...action.payload],
      };
    case POST_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload]

      };

    case REPLACE_PROJECT:
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.id === action.payload.id) {
            return {
              ...action.payload
              // content: action.payload.content,
            }
          } else {
            return project
          }
        })
      }
      
    default:
      return state;
  }
};

export default projectReducer;
