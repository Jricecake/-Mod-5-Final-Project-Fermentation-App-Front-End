import React from "react";
import { connect } from "react-redux";
import { Button, Navbar, Nav, DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { logoutUser } from "../redux";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/landing");
    props.logoutUser();
    props.clearStore();
  };

  return (
    console.log(`this has rendered ${props.user.logged_in}`),
    (
      <Navbar className="navbar-color-scheme">
        <Navbar.Brand>Fermentator</Navbar.Brand>
        {props.user.logged_in ? (
        <DropdownButton
          as={ButtonGroup}
          title="Projects"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item href="/projects" eventKey="1">Current</Dropdown.Item>
          <Dropdown.Item href="/projects/complete" eventKey="2">Completed</Dropdown.Item>
        </DropdownButton>
        ) : (
          "Welcome!"
        )}
        {props.user.logged_in ? (
          <Nav.Link href="/account">My Account</Nav.Link>
        ) : null}

        {props.user.logged_in ? (
          <Button
            className="justify-content-end"
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
