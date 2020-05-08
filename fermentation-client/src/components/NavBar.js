import React from "react";
import { connect } from "react-redux";
import { Button, Navbar, Nav } from "react-bootstrap";
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
    <Navbar className="container-color-scheme">
      <Navbar.Brand>Fermi</Navbar.Brand>
      {props.user.logged_in ? <Nav.Link href="/projects">Projects</Nav.Link>: 'Welcome!'}
      {props.user.logged_in ? <Nav.Link href="/account">My Account</Nav.Link>: null}

      {props.user.logged_in ? <Button
        className="justify-content-end"
        variant="outline-danger"
        onClick={handleLogout}
      >
        Logout
      </Button> : null}
    </Navbar>
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
