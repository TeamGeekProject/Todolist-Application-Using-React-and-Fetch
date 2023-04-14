import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link className="navbar-brand  mx-2" to="/single">
        <i class="fa-solid fa-house "></i>🏠{" "}
        <span className="navbar-brand mb-0 h1  ">Home</span>
      </Link>
      <div className="ml-auto">
        <Link to="/todo">
          <button className="btn btn-primary mx-2">
            Check Out our Todo List
          </button>
        </Link>
      </div>
    </nav>
  );
};
