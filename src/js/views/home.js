import React from "react";
import {Link} from "react-router-dom"

import "../../styles/home.css";
//import { useContext, createContext, useState } from "react";
//import { Context } from "../store/appContext";

export const Home = () => (
  <div className="text-center mt-5">
    <div className="row justify-content-center">
      <div className="col-6">
      
        <p>This project has been created by:</p>
        <div className="list-group" id="list-tab" role="tablist">
          <Link
            className="list-group-item list-group-item-action itemFilter"
            id="list-home-list"
            data-bs-toggle="list"
            to={{pathname: "//github.com/Balim1"}}
            target="_blank"
            role="tab"
            aria-controls="list-home"
            onClick={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                actions.Link(e.target.value);
              }
            console.log("SUCCESS")
            }}
          >
            Balim1
          </Link>
          <Link
            className="list-group-item list-group-item-action itemFilter"
            id="list-profile-list"
            data-bs-toggle="list"
            to={{pathname:"//github.com/joaarg86"}}
            target="_blank"
            role="tab"
            aria-controls="list-profile"
            onClick={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                actions.Link(e.target.value);
              }
            console.log("SUCCESS")
            }}
          >
            joaarg86
          </Link>
          <Link
            className="list-group-item list-group-item-action itemFilter"
            id="list-messages-list"
            data-bs-toggle="list"
            to={{pathname:"//github.com/raulyfs11"}}
            target="_blank"
            role="tab"
            aria-controls="list-messages"
            onClick={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                actions.Link(e.target.value);
              }
            console.log("SUCCESS")
            }}
          >
            raulyfs11
          </Link>
          <Link
            className="list-group-item list-group-item-action itemFilter"
            id="list-settings-list"
            data-bs-toggle="list"
            to={{pathname:"//github.com/spacemc2"}}
            target="_blank"
            role="tab"
            aria-controls="list-settings"
            onClick={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                actions.Link(e.target.value);
              }
            console.log("SUCCESS")
            }}
          >
            spacemc2
          </Link>
        </div>


        {/* <ul className=" list-group" id="list-tab" role="tablist">
          <li>
            <a
              className="link-secondary text-decoration-none"
              href="https://github.com/Balim1"
            >
              Balim1
            </a>
          </li>
          <li>
            <a
              className="link-secondary text-decoration-none"
              href="https://github.com/joaarg86"
            >
              joaarg86
            </a>
          </li>
          <li>
            <a
              className="link-secondary text-decoration-none"
              href="https://github.com/raulyfs11"
            >
              raulyfs11
            </a>
          </li>
          <li>
            <a
              className="link-secondary text-decoration-none"
              href="https://github.com/spacemc2"
            >
              spacemc2
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  </div>
);

