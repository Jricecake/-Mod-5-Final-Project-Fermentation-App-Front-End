import React from "react";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap'
import { Link, Redirect } from "react-router-dom";
import { logoutUser } from "../redux";

const NavBar = (props) => {

  const handleLogout = () => {
    props.logoutUser();
    return <Redirect to='/landing' />
  }
  const user = props.user

  return (
    <div>
      {user? <Link to="/projects">Projects</Link> : null}
      <Button
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};


const mapStateToProps = (state) =>{
  return{
    user: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    clearStore: () => dispatch({type: "USER_LOGOUT"}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
