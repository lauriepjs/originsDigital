import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">
        <img className="logo" src="../../assets/LOGO-3.png"></img>
      </Link>
      <Link to="/funzone">
        <div>
          <h1 className="nav">Fun Zone</h1>
        </div>
      </Link>
      <Link to="/testimonials">
        <div>
          <h1 className="nav">Testimonials</h1>
        </div>
      </Link>
      <div>
        <p>logo reherche</p>
      </div>
      <div>
        <p>logo compte</p>
      </div>
    </div>
  );
}

export default Navigation;
