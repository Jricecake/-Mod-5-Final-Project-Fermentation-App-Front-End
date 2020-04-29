import React from "react";
import Project from "../components/Project";
import CreateProject from '../components/CreateProject'
import { fetchProjects, fetchNotes, mapNotesToProjectId } from "../redux";
import { connect } from "react-redux";
import store from "../redux/store";
import { Container, Row, Col } from 'react-bootstrap'


class ProjectsContainer extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //   notesObject: {}
  // }
    
  // }
  // componentDidMount() {
  //   fetchNotes()(store.dispatch)
  //   fetchProjects()(store.dispatch);
  // }

  mapNotesToProjectId = () =>{
    this.props.allNotes.map(note => {
      if (!this.state.notesObject[`${note.project_id}`]) {
        this.state.notesObject[`${note.project_id}`] = [note]
      } else {
        this.state.notesObject[`${note.project_id}`].push(note)
      }
    })
    console.log(this.state.notesObject)
  }

  renderProjects = () => {
    return this.props.allProjects.map((project) => {
      return <Col><Project project={project} /></Col>

    })
  };

  render() {
    return(
      <Container>

        {/* <CreateProject/> */}
        <Row>
          <Col md={4}>
          Current Projects
          </Col>
        </Row>
        <Row>
        {this.renderProjects()}
        </Row>
      </Container>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    allProjects: state.project.projects,
    allNotes: mapNotesToProjectId(state.notes.notes)
  };
};

export default connect(mapStateToProps)(ProjectsContainer);
