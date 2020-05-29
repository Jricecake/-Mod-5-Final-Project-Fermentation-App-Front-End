import React from "react";
import Project from "../components/Project";
import CreateProject from "../components/CreateProject";
import AddIngredients from "../components/AddIngredients";
import { fetchProjects, fetchNotes, mapNotesToProjectId } from "../redux";
import { connect } from "react-redux";
import store from "../redux/store";
import { Container, Row, Col, Card, Nav, Button } from "react-bootstrap";
import { createSelector } from "reselect";

class ProjectsContainer extends React.Component {
  state = {
    showButton: false,
  };

  // componentDidMount() {
  //   console.log("projects container mounted");
  //   fetchNotes()(store.dispatch);
  //   fetchProjects()(store.dispatch);
  // }

  renderProjects = (props) => {
    return this.props.allProjects.map((project, idx) => {
      if (!project.completed)
      return (
        // <Col className="justify-content-center" xs={6} sm={4} md={3}>
        <Project {...props} project={project} position={idx + 1} />
        // </Col>
      );
    });
  };
  showCreateProject = () => {
    this.setState({ showButton: !this.state.showButton });
  };

  render() {
    return (
      <Container className="sub-container-color-scheme">
        <Row className="justify-content-center">
          <Button
            className="button-pop-color"
            type="button"
            onClick={() =>
              this.setState({ showButton: !this.state.showButton })
            }
          >
            +
          </Button>
        </Row>
        {this.state.showButton ? (
          <CreateProject closeForm={this.showCreateProject} />
        ) : <div className="container-color-scheme view-height-forty">
        <Col>
          Current Projects
          <Row className="justify-content-center">
            {this.props.allProjects.length > 0 ? this.renderProjects() : <span className="noneToDisplay">No Projects!
            </span>}
          </Row>
        </Col>
      </div>}

        
      </Container>
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
    allProjects: state.project.projects
    // allProjects: state.project.projects,
    // allNotes: mapNotesToProjectId(state.notes.notes),
  };
  debugger;
};

export default connect(mapStateToProps, null)(ProjectsContainer);

// export default loaderHOC(connect(mapStateToProps, null)(ProjectsContainer));
