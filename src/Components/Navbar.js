import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mx-auto mb-0 h1">
            <h1 className="logo">SPD</h1>
          </span>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
