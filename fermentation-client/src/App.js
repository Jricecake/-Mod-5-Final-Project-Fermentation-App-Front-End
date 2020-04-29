import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Landing from "./containers/Landing";
import ProjectsContainer from "./containers/ProjectsContainer";
import { fetchProjects, fetchNotes } from "./redux";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  componentDidMount() {
    fetchNotes()(store.dispatch)
    fetchProjects()(store.dispatch);
  }
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <Container>
              <Row>
                {/* <Landing /> */}
              </Row>
              <Row className="justify-content-md-center">
                <Col xs lg="6">
                <ProjectsContainer />
                </Col>
              </Row>
            </Container>
            
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
