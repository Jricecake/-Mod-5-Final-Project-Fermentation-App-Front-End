import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Landing from "./containers/Landing";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ProjectsContainer from "./containers/ProjectsContainer";
import {
  fetchProjects,
  fetchNotes,
  fetchLoginUserByToken,
  loginUser,
} from "./redux";
import store from "./redux/store";
import NavBar from "./components/NavBar";
import CreateProject from "./components/CreateProject";
import { Provider } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { api } from "./services/api";

class App extends React.Component {
  state = {
    authUser: {},
    location: {},
    users: [],
    chores: [],
    isAdmin: false,
    draggedChore: null,
  };

  componentDidMount(props) {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      // fetchLoginUserByToken()
      api.auth.getCurrentUser().then((user) => {
        if (user.error) {
          console.log(user.error);
          localStorage.removeItem("token");
        } else {
          console.log(user);
          this.setState({ authUser: user.user });
          store.dispatch(loginUser(user));
          fetchNotes()(store.dispatch);
          fetchProjects(this.state.authUser.id)(store.dispatch);
          return <Redirect to="/projects" />;
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <header>
              <NavBar />
            </header>
            {localStorage.getItem("token") ? (
              <Redirect to="/projects" />
            ) : (
              <Redirect to="landing" />
            )}
            <Route path="/profile" />
            <Route path="/newproject" render={() => <CreateProject />} />
            <Route path="/landing" render={() => <Landing />} />

            <Route
              exact
              path="/projects"
              render={() => <ProjectsContainer />}
            />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
