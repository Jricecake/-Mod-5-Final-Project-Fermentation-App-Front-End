import React from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
};
export default Landing;
