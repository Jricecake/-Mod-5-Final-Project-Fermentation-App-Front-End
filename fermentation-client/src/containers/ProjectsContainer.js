import React from "react";
import Project from "../components/Project";
import CreateProject from "../components/CreateProject";
import AddIngredients from "../components/AddIngredients";
import { fetchProjects, fetchNotes, mapNotesToProjectId } from "../redux";
import { connect } from "react-redux";
import store from "../redux/store";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { createSelector } from "reselect";


class ProjectsContainer extends React.Component {
  state = {
    showButton: false,
  };

  componentDidMount() {
    console.log(this.props.history)
    fetchNotes()(store.dispatch);
    fetchProjects()(store.dispatch);
  }

  renderProjects = (props) => {
    return this.props.allProjects.map((project) => {
      return (
        <Col md={3}>
          <Project {...props} project={project} />
        </Col>
      );
    });
  };
  showCreateProject = () => {
    this.setState({ showButton: !this.state.showButton });
  };

  render() {
    return (
      <div>
        <Container className="bg-secondary">
          <Row className="justify-content-center">
            <Button
              className="text-center"
              type="button"
              onClick={this.showCreateProject}
            >
              Add New Project
            </Button>
            {this.state.showButton ? (
              <CreateProject closeForm={this.showCreateProject} />
            ) : null}
          </Row>
          <Row></Row>
          <Container className="bg-white">
            <Col>Current Projects</Col>
            <Row>{this.renderProjects()}</Row>
          </Container>
        </Container>
      </div>
    );
  }
}

// const getNotes = state => state.notes.notes

// export const selectNotesByProject = createSelector(
//   getNotes,
//   (notes) => mapNotesToProjectId(notes)
// )

// state.project.projects.filter(project=> project.id == state.user.currentUser.id)

const mapStateToProps = (state) => {
  return {
    authUser: state.user.currentUser,
    allProjects: state.project.projects.filter(project=> project.user.id == state.user.currentUser.user.id)
    // allProjects: state.project.projects,
    // allNotes: mapNotesToProjectId(state.notes.notes),
  };
  debugger;
};

export default connect(mapStateToProps, null)(ProjectsContainer);

// export default loaderHOC(connect(mapStateToProps, null)(ProjectsContainer));
