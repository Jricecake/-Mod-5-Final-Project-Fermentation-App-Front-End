import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Landing from "./containers/Landing";
import ProjectsContainer from "./containers/ProjectsContainer";
import { fetchProjects, fetchNotes } from "./redux";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import AddRecipeForm from "./components/AddRecipeForm";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { api } from './services/api';

class App extends React.Component {
  state = {
    authUser: {},
    location: {},
    users: [],
    chores: [],
    isAdmin: false,
    draggedChore: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        this.setState({ authUser: user.user });
      });
      fetchNotes()(store.dispatch);
      fetchProjects()(store.dispatch);
    }
  }

  login = data => {
    localStorage.setItem("token", data.jwt);
    this.setState({ authUser: data.user });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ authUser: {}, });
  };

  returningUser = data => {
    this.setState({ authUser: data.user })
  }



  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <Signup />
            <Login onLogin={this.login} onReturningUser={this.returningUser}/>
            <Container fluid>
              <Row></Row>
              <Row className="justify-content-md-center">
                <Col>{/* <ProjectsContainer /> */}</Col>
              </Row>
            </Container>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
