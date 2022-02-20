import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left-group">
        <div className="logo-div">
            <Link to="/">
         
          </Link>
        </div>
        <div className="home-div">
        </div>
        <div className="podcast-div">
        </div>
      </div>
        <div className="user-div">
      <a href="https://www.mongodb.com/basics/clusters/mongodb-cluster-setup">
          <h4>Login</h4>
      </a>
        </div>
    </div>
  );
}

export default Navbar;
