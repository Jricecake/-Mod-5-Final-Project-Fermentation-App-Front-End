import { api } from "../../services/api";
import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  POST_PROJECT_SUCCESS,
  REPLACE_PROJECT,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT
} from "./projectTypes";


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
  console.log(newProject);
  return {
    type: POST_PROJECT_SUCCESS,
    payload: newProject,
  };
};

export const deleteProjectRequest = (project_id) => {
  return {
    type: DELETE_PROJECT_REQUEST,
  }
}

export const deleteProjectSuccess = (project_id) => {
  return {
    type: DELETE_PROJECT,
    payload: project_id
  }
}

export const replaceProject = (newProject) => {
  console.log(newProject);
  return {
    type: REPLACE_PROJECT,
    payload: newProject,
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch(fetchProjectsRequest());
    api.project
      .getAllProjects()
      // change above to get individual's projects
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
    api.project.createProject(newProject).then((data) => {
      console.log(data);
      if (data.error) {
        dispatch(fetchProjectsFailure(data.error));
      } else {
        console.log(data);
        dispatch(postProjectSuccess(data.project));
      }
    });
  };
};
export const updateProject = (project) => {
  return (dispatch) => {
    dispatch(fetchProjectsRequest());
    api.project.updateProject(project).then((data) => {
      console.log(data);
      if (data.error) {
        dispatch(fetchProjectsFailure(data.error));
      } else {
        console.log(data);
        dispatch(replaceProject(data.project));
      }
    });
  };
};

export const deleteProject = (project_id) => {
  return (dispatch) => {
    dispatch(deleteProjectRequest());
    console.log(`delete project ${project_id}`)
    api.project.deleteProject(project_id).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error)
      } else {
        console.log(data);
        dispatch(deleteProjectSuccess(project_id));
      
    };
  });
  }
  
};
