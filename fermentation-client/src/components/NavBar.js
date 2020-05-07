import React from "react";
import { connect } from "react-redux";
import { Button, Navbar, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { logoutUser } from "../redux";
import {useHistory} from 'react-router-dom'

const NavBar = (props) => {
  const history = useHistory()
  const handleLogout = () => {
    localStorage.clear();
    history.push('/landing');
    props.logoutUser();
    props.clearStore()
  };

  return (
    <Navbar className='container-color-scheme'>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/account">My Account</Nav.Link>
      

        <Button className='justify-content-end' variant='outline-danger' onClick={handleLogout}>Logout</Button>
        
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    clearStore: () => dispatch({ type: "USER_LOGOUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
