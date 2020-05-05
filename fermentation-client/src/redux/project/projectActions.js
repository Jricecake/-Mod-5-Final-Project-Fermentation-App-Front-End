import { api } from '../../services/api'
import {
  ADD_PROJECT,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  POST_PROJECT_SUCCESS
} from "./projectTypes";
const PROJECT_URL = "http://localhost:3000/api/v1/projects/";

export const fetchProjectsRequest = () => {
  return {
    type: FETCH_PROJECTS_REQUEST,
  };
};

export const fetchProjectsFailure = (error) => {
  return {
    type: FETCH_PROJECTS_FAILURE,
    error: error,
  };
};
export const fetchProjectsSuccess = (projects) => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: projects,
  };
};
export const postProjectSuccess = (newProject) => {
  return {
    type: POST_PROJECT_SUCCESS,
    payload: newProject
  }
}

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch(fetchProjectsRequest());
    api.project.getProjects()
      .then((data) => {
        if (data.error) {
          dispatch(fetchProjectsFailure(data.error));
        } else {
          dispatch(fetchProjectsSuccess(data));
        }
      });
  };
};
export const postProject = (newProject) => {
  return (dispatch) => {
    dispatch(fetchProjectsRequest());
    fetch(PROJECT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProject)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          dispatch(fetchProjectsFailure(data.error));
        } else {
          console.log(data)
          dispatch(postProjectSuccess(data.note));
        }
      });
  };
};
