import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="container">
          <div className="navbarWrapper">
            <span className="logo">OneDev</span>
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
