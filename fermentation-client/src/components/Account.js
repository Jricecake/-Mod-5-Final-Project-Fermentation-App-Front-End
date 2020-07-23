import React from "react";
import composedAuthHOC from "../HOCs/authHOC";
import { Container, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";

const Account = (props) => {
  var currentDate = new Date().getTime();
  var today = new Date();
  var todaysDate =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  const timeOfAllProjects = (allProjects) => {
    let totalTime = 0;
    allProjects.forEach((project) => {
      const start = new Date(project.created_at).getTime();
      totalTime += currentDate - start;
    });
    return Math.floor(totalTime / (1000 * 3600 * 24));
  };
  return (
    <>
    <span className="outer-content">Account Details</span>
    <Container className='container-color-scheme text-align-left'>
      {todaysDate}
      <h3>
        You currently have {props.allProjects.length} actively fermenting {props.allProjects.length > 1 ? "projects" : "project"}
      </h3>
      <div>
        Combined time fermenting: {timeOfAllProjects(props.allProjects)} Days
      </div>
      <div>
        You have completed {props.completedProjects.length} {props.completedProjects.length > 1 ? "projects" : "project"}
      </div>
    </Container>
</>
  );
};

const mapStateToProps = (state) => {
  return {
    logged_in: state.user.logged_in,
    user: state.user.currentUser.user,
    allProjects: state.project.projects,
    completedProjects: state.project.projects.filter(
      (project) =>
        project.user.id == state.user.currentUser.user.id &&
        project.completed == true)
    }
};

// export default connect(mapStateToProps)(Account)
export default composedAuthHOC(connect(mapStateToProps)(Account));
