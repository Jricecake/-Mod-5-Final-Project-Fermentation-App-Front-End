import React from "react";
import { connect } from "react-redux";
import { Button, Navbar, Nav, DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import { logoutUser } from "../redux";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
    props.logoutUser();
    props.clearStore();
  };

  return (
    (
      <Navbar className="ml-auto" className="navbar-color-scheme">
        <Navbar.Brand variant='light'>Bacterra</Navbar.Brand>
        {props.user.logged_in ? (
        <DropdownButton
          as={ButtonGroup}
          title="Projects"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item href="/projects" eventKey="1">Current</Dropdown.Item>
          <Dropdown.Item href="/projects/complete" eventKey="2">Completed</Dropdown.Item>
          <Dropdown.Item href="/newproject" eventKey="3">New Project</Dropdown.Item>
        </DropdownButton>
        ) : (
          "Welcome!"
        )}
        <Nav.Link href="/about">About</Nav.Link>
        {props.user.logged_in ? (
          <Nav.Link href="/account">My Account</Nav.Link>
        ) : null}

        {props.user.logged_in ? (
          <Button
            className="navbar-right"
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
