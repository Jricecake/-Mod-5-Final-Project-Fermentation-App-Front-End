import React from "react";
import Project from "../components/Project";
import CreateProject from '../components/CreateProject'
import { connect } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap'


class ProjectsContainer extends React.Component {
  renderProjects = () => {
    return this.props.projectsList.map((project) => {
      return <Project project={project} />;
    });
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
  // console.log(state.project)
  return {
    projectsList: state.project.data,
  };
};

export default connect(mapStateToProps)(ProjectsContainer);
