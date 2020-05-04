import React from "react";
import Project from "../components/Project";
import CreateProject from "../components/CreateProject";
import AddIngredients from "../components/AddIngredients";
import { fetchProjects, fetchNotes, mapNotesToProjectId } from "../redux";
import { connect } from "react-redux";
import store from "../redux/store";
import { Container, Row, Col } from "react-bootstrap";
import { createSelector } from "reselect";

class ProjectsContainer extends React.Component {
  state = {
    showButton: false
  }
  renderProjects = () => {
    return this.props.allProjects.map((project) => {
      return (
        <Col>
          <Project project={project} />
        </Col>
      );
    });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <button type="button" onClick={() => this.setState({showButton: !this.state.showButton})}>Add New Project</button>
            {this.state.showButton? <CreateProject /> : null}
            
            <Col md={4}>Current Projects</Col>
          </Row>
          <Row>{this.renderProjects()}</Row>
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

const mapStateToProps = (state) => {
  return {
    allProjects: state.project.projects,
    // allNotes: mapNotesToProjectId(state.notes.notes),
  };
  debugger;
};

export default connect(mapStateToProps)(ProjectsContainer);
