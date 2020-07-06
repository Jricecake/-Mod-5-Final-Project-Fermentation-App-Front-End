import React from "react";
import Project from "../components/Project";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";


class CompletedProjects extends React.Component {
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
      return <Project {...props} project={project} position={idx + 1} />;
    });
  };
  showCreateProject = () => {
    this.setState({ showButton: !this.state.showButton });
  };

  render() {
    return (
      <Container className="sub-container-color-scheme">
        <Row className="justify-content-center">
        </Row>
          <div className="container-color-scheme view-height-forty">
            <Col>
              Completed Projects
              <Row className="justify-content-center">
                {this.props.allProjects.length > 0 ? (
                  this.renderProjects()
                ) : (
                  <span className="noneToDisplay">No Projects!</span>
                )}
              </Row>
            </Col>
          </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.user.currentUser,
    allProjects: state.project.projects.filter(
      (project) => project.user.id == state.user.currentUser.user.id && project.completed == true
    ),
  };
};

export default connect(mapStateToProps, null)(CompletedProjects);
