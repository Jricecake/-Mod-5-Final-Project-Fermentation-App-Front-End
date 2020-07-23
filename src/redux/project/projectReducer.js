import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  POST_PROJECT_SUCCESS,
  REPLACE_PROJECT,
  DELETE_PROJECT,
  DELETE_PROJECT_REQUEST
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
        projects: [...state.projects, action.payload],
      };
    
    case DELETE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case DELETE_PROJECT:
      return {
        ...state,
        loading: false,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };

    case REPLACE_PROJECT:
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.id === action.payload.id) {
            return {
              ...action.payload,
              // content: action.payload.content,
            };
          } else return project;
        }),
      };

    default:
      return state;
  }
};

export default projectReducer;
