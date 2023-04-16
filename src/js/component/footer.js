import React, { Component } from "react";
import {Link} from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <Link to={{ pathname: " " }} target="_blank">
      <button className="btn btn-secondary">Click to open new tab</button></Link>
    <p>
      We use a template from</p>
      <Link to={{pathname: "//github.com/4geeksacademy"}} target="_blank">
        4Geeks Academy
      </Link>
      <i className="fa fa-heart text-danger" />
    
  </footer>
);
