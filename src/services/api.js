const API_ROOT = `https://desolate-savannah-14635.herokuapp.com/api/v1`;
// const API_ROOT = 'http://localhost:3000/api/v1'
const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token()
  };
};

//data must be nested objects ie {user: {id: ...}}

const login = data => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  }).then(resp => resp.json());
};

const newUser = data => {
  return fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  }).then(resp => resp.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers()
  }).then(resp => resp.json());
};

const updateUser = data => {
  return fetch(`${API_ROOT}/users/${data.user.id}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(data)
  }).then(resp => resp.json());
};

const deleteUser = user_id => {
  return fetch(`${API_ROOT}/users/${user_id}`, {
    method: "DELETE",
    headers: headers(),
  }).then(resp => resp.json());
};

const createProject = data => {
  return fetch(`${API_ROOT}/projects`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  }).then(resp => resp.json());
}
const createNote = data => {
  return fetch(`${API_ROOT}/notes`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  }).then(resp => resp.json());
}

const getAllProjects = () => {
  return fetch(`${API_ROOT}/projects/`, {
    headers: headers()
  }).then(resp => resp.json());
};
const getUserProjects = (id) => {
  return fetch(`${API_ROOT}/user_projects/${id}`, {
    headers: headers()
  }).then(resp => resp.json());
};

const getNotes = () => {
  return fetch(`${API_ROOT}/notes/`, {
    headers: headers()
  }).then(resp => resp.json());
};

const deleteProject = project_id => {
  return fetch(`${API_ROOT}/projects/${project_id}`, {
    method: "DELETE",
    headers: headers(),
  }).then(resp => resp.json());
}


const updateProject = project => {
  console.log(project)
  return fetch(`${API_ROOT}/projects/${project.id}/edit`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(project)
  }).then(resp => resp.json());
}


export const api = {
  auth: {
    login,
    getCurrentUser,
  },
  user: {
    newUser,
    updateUser,
    deleteUser,
  },
  project: {
    createProject,
    getUserProjects,
    getAllProjects,
    deleteProject,
    updateProject
  },
  note: {
    getNotes,
    createNote,
  }
};