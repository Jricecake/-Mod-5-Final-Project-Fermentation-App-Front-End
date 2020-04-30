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
          {/* {this.props.allNotes[project.id] ? ( */}
            <Project
              project={project}
            />
          {/* ) : (
            <Project project={project} notes={null} />
          )} */}
        </Col>
      );
    });
  };

  render() {
    console.log('i rerendered the projects container')
    return (
      <Container fluid>
        {/* <CreateProject/> */}
        <Row>
          <Col md={4}>Current Projects</Col>
        </Row>
        <Row>{this.renderProjects()}</Row>
      </Container>
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
    ...state,
    allProjects: state.project.projects,
    // allNotes: mapNotesToProjectId(state.notes.notes),
  };
  debugger
};

export default connect(mapStateToProps)(ProjectsContainer);
