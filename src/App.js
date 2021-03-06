import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Landing from "./containers/Landing";
import { Router, Route, BrowserRouter } from "react-router-dom";
import { withRouter } from "react-router";
import ProjectsContainer from "./containers/ProjectsContainer";
import CompletedProjects from "./containers/CompletedProjects";
import { fetchLoginUserByToken, loginUser } from "./redux";
import store from "./redux/store";
import NavBar from "./components/NavBar";
import Account from "./components/Account";
import EditProject from "./components/EditProject";
import ProjectDetails from "./components/ProjectDetails";
import history from "./history";
import CreateProject from "./components/CreateProject";
import About from "./components/About";
import { Provider } from "react-redux";
import { api } from "./services/api";

class App extends React.Component {
  state = {
    authUser: {},
    users: [],
  };

  componentDidMount(props) {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      fetchLoginUserByToken();
      api.auth.getCurrentUser().then((user) => {
        if (user.error) {
          console.log(user.error);
          localStorage.removeItem("token");
        } else {
          console.log(user);
          this.setState({ authUser: user.user });
          store.dispatch(loginUser(user.user));
          // fetchNotes()(store.dispatch);
          // fetchProjects()(store.dispatch);
        }
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {/* {store.getState().user.logged_in ? <NavBar /> : null} */}
          {/* <Container className="bgcolor-nice"> */}
          <Route
            path="/project/:id"
            render={(props) => <ProjectDetails {...props} />}
          />
          <Route exact path="/account" render={() => <Account />} />
          <Route
            exact
            path="/projects/:id/edit"
            render={(props) => <EditProject {...props} />}
          />
          <Route path="/newproject" render={() => <CreateProject />} />
          <Route exact path="/" component={() => <Landing />} />

          <Route
            exact
            path="/projects"
            component={(props) => <ProjectsContainer {...props} />}
          />
          <Route
            exact
            path="/projects/complete"
            render={(props) => <CompletedProjects {...props} />}
          />
          <Route exact path="/about" render={() => <About />} />
          {/* </Container> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
