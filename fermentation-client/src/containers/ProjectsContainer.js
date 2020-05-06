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
    showButton: false
  }

  componentDidMount(props){
    fetchNotes()(store.dispatch);
    fetchProjects(props.authUser.id)(store.dispatch);
  }
  renderProjects = () => {
    return this.props.allProjects.map((project) => {
      return (
        <Col md={3}>
          <Project project={project} />
        </Col>
      );
    });
  };
  showCreateProject = () => {
    this.setState({showButton:!this.state.showButton})
  }

  render() {
    return (
      <div>
        <Container className='bg-secondary'>
          {/* <Row>
            <Card style={{ width: '14rem' }}>
              <Card.Title>Project</Card.Title>
              <Card.Body>
                Here is a Card
              </Card.Body>
            </Card>
            
            </Row> */}
            <Row className='justify-content-center'>
            <Button className='text-center' type="button" onClick={this.showCreateProject}>Add New Project</Button>
            {this.state.showButton? <CreateProject closeForm={this.showCreateProject}/> : null}

            </Row>
          <Row>
          </Row>
            <Container className='bg-white'>

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

const mapStateToProps = (state) => {
  return {
    authUser: state.user.currentUser.user,
    allProjects: state.project.projects,
    // allNotes: mapNotesToProjectId(state.notes.notes),
  };
  debugger;
};

export default connect(mapStateToProps)(ProjectsContainer);
