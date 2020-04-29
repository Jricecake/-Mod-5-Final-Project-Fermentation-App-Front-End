import React from "react";
import Project from "../components/Project";
import CreateProject from "../components/CreateProject";
import { fetchProjects, fetchNotes, mapNotesToProjectId } from "../redux";
import { connect } from "react-redux";
import store from "../redux/store";
import { Container, Row, Col } from "react-bootstrap";
import { createSelector } from 'reselect'

class ProjectsContainer extends React.Component {
  renderProjects = () => {
    return this.props.allProjects.map((project) => {
      return (
        <Col>
          {this.props.allNotes[project.id] ? (
            <Project
              project={project}
              notes={this.props.allNotes[project.id]}
            />
          ) : (
            <Project project={project} notes={null} />
          )}
        </Col>
      );
    });
  };

  render() {
    return (
      <Container>
        {/* <CreateProject/> */}
        <Row>
          <Col md={4}>Current Projects</Col>
        </Row>
        <Row>{this.renderProjects()}</Row>
      </Container>
    );
  }
}

const getNotes = state => state.notes.notes

export const selectNotesByProject = createSelector(
  getNotes,
  (notes) => mapNotesToProjectId(notes)
)

const mapStateToProps = (state) => {
  return {
    ...state,
    allProjects: state.project.projects,
    allNotes: selectNotesByProject(state.notes.notes[0]),
  };
};

export default connect(mapStateToProps)(ProjectsContainer);
