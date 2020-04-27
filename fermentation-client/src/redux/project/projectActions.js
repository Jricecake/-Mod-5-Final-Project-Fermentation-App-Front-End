import { ADD_PROJECT, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAILURE } from "./projectTypes";
const PROJECT_URL = 'http://localhost:3000/api/v1/projects/'

export const fetchProjectsRequest = () => {
  return {
    type: FETCH_PROJECTS_REQUEST
  }
}

export const fetchProjectsFailure = error => {
  return {
    type: FETCH_PROJECTS_FAILURE,
    error: error
  }
}
export const fetchProjectsSuccess = projects => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: projects
  }
}

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch(fetchProjectsRequest())
    fetch(PROJECT_URL)
      .then (res => res.json())
      .then(data => {
        if (data.error){
          dispatch(fetchProjectsFailure(data.error))
        } else {
          console.log(data)
          dispatch(fetchProjectsSuccess(data))
        }

      })
  }
}


export const addProject = (project) => {
  return {
    type: ADD_PROJECT,
    payload: project,
  };
};
