import React from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container">
      <div>
        <Login />
      </div>
      <div>
        <Signup />
      </div>
    </div>
  );
};
export default Landing;
