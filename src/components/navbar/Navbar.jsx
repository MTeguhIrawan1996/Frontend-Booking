import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.login);

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="container">
          <div className="navbarWrapper">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <span className="logo">OneDev</span>
            </Link>
            {user ? (
              user.username
            ) : (
              <div className="navItem">
                <button className="btn">Register</button>
                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
