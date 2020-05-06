import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux";

const NavBar = (props) => {
  return (
    <div>
      <Link to="/projects">Projects</Link>
      <Link
        onClick={() => (
          localStorage.removeItem("token"),
          props.logoutUser,
          props.clearStore
          )}
        to="/landing"
      >
        Logout
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    clearStore: () => dispatch({type: "USER_LOGOUT"}),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
