import React from "react";
import { connect } from "react-redux";
import { Button, Navbar, Nav, DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import { logoutUser } from "../redux";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const history = useHistory();
  const handleLogout = () => {
    history.push("/");
    props.logoutUser();
    localStorage.clear();
    // props.clearStore();
  };

  return (
    (
      <Navbar variant='dark' className="ml-auto" className="navbar-color-scheme">
        <Navbar.Brand href='/' className='navbar-header'>Bacterra</Navbar.Brand>
        {props.user.logged_in ? (
        <DropdownButton
          variant='dark'
          as={ButtonGroup}
          title="Projects"
          id="navbar-dropdown"
          className='navbar-dropdown'
        >

          <Dropdown.Item className='navbar-dropdown' href="/projects" eventKey="1">Current</Dropdown.Item>
          <Dropdown.Item className='navbar-dropdown' href="/projects/complete" eventKey="2">Completed</Dropdown.Item>
          <Dropdown.Item className='navbar-dropdown' href="/newproject" eventKey="3">New Project</Dropdown.Item>
        </DropdownButton>
        ) : (
          "Welcome!"
        )}
        <Nav.Link className='' href="/about">About</Nav.Link>
        {props.user.logged_in ? (
          <Nav.Link href="/account">My Account</Nav.Link>
        ) : null}

        {props.user.logged_in ? (
          <Button
            className="ml-auto"
            variant="outline-danger"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : null}
      </Navbar>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    clearStore: () => dispatch({ type: "USER_LOGOUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
