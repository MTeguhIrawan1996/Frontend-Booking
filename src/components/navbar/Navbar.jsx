import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="container">
          <div className="navbarWrapper">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <span className="logo">OneDev</span>
            </Link>
            <div className="navItem">
              <button className="btn">Register</button>
              <button className="btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
