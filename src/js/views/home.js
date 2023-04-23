import React from "react";
import "../../styles/home.css";
//import { useContext, createContext, useState } from "react";
//import { Context } from "../store/appContext";

export const Home = () => (
  <div className="text-center mt-5">
    <div className="row justify-content-center">
      <div className="col-6">
        <p>This project has been created by:</p>
        <div class="list-group" id="list-tab" role="tablist">
          <a
            class="list-group-item list-group-item-action itemFilter"
            id="list-home-list"
            data-bs-toggle="list"
            href="https://github.com/Balim1"
            role="tab"
            aria-controls="list-home"
          >
            Balim1
          </a>
          <a
            class="list-group-item list-group-item-action itemFilter"
            id="list-profile-list"
            data-bs-toggle="list"
            href="https://github.com/joaarg86"
            role="tab"
            aria-controls="list-profile"
          >
            joaarg86
          </a>
          <a
            class="list-group-item list-group-item-action itemFilter"
            id="list-messages-list"
            data-bs-toggle="list"
            href="https://github.com/raulyfs11"
            role="tab"
            aria-controls="list-messages"
          >
            raulyfs11
          </a>
          <a
            class="list-group-item list-group-item-action itemFilter"
            id="list-settings-list"
            data-bs-toggle="list"
            href="https://github.com/spacemc2"
            role="tab"
            aria-controls="list-settings"
          >
            spacemc2
          </a>
        </div>
      </div>
    </div>
  </div>
);
