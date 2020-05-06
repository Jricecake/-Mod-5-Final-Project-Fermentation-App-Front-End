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
import { connect } from "react-redux";
import store from "./redux/store";
import NavBar from "./components/NavBar";
import Account from "./components/Account";
import ProjectDetails from "./components/ProjectDetails";
import CreateProject from "./components/CreateProject";
import { Provider } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
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
      fetchLoginUserByToken()
      api.auth.getCurrentUser().then((user) => {
        if (user.error) {
          console.log(user.error);
          localStorage.removeItem("token");
        } else {
          console.log(user);
          this.setState({ authUser: user.user });
          store.dispatch(loginUser(user));
      // fetchNotes()(store.dispatch);
      // fetchProjects()(store.dispatch);
      }
      });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <header>
              <NavBar />
            </header>
            {localStorage.getItem("token") ? (
              <Redirect to="/account" />
            ) : (
              <Redirect to="landing" />
            )}
            <Route path="/project/:id" render={(props)=><ProjectDetails {...props} />}/>
            <Route path="/account" render={()=> <Account/>}/>
            <Route path="/newproject" render={() => <CreateProject />} />
            <Route path="/landing" render={() => <Landing />} />

            <Route
              exact
              path="/projects"
              render={(props) => <ProjectsContainer {...props} />}
            />
          </Router>
        </div>
      </Provider>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     authUser: state.user.currentUser,
//   };
// };

// const mapDispatchToProps = () => {
//   onLogin: () => {}
// }

// export default connect(mapStateToProps, null)(App);
export default App
