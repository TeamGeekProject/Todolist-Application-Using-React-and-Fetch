// import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";
import "../../styles/todo.css";
import { text } from "@fortawesome/fontawesome-svg-core";

export const Todo = () => {
  const { store, actions } = useContext(Context);


  if (store.isActivated === false) {
    actions.createUser();
  }
  useEffect(() => {
    actions.loadSomeData();
  }, []);

  console.log(store.todoListItems);

  return (
    <div className="container">
      <h1 className="Title text-center">Todo List</h1>

      <div className="conatiner-flex text-center ms-3">
        <div className="Task text-center ">
          <div className="row  justify-content-center">
            <div className="col-md-6 col-8">
              <form>
                <input
                  className="text-center form-control"
                  placeholder="No tasks, add a task!"
                  type="text"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      actions.addTodoListItem(e.target.value);
                    }
                  console.log("SUCCESS")
                  }}
                  //   value={input}
                ></input>
              </form>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-8">
              <ul className="list-group ">
                {store.todoListItems.map((item, index) =>
                  item.label != "sample task" ? (
                    <li className="list-group-item rounded" key={index}>
                      <span className="float-start items-style">
                        {item.label}
                      </span>

                      <span
                        className="float-end text-danger"
                        onClick={() => {
                          actions.deleteTodoListItem(index);
                        }}
                        
                      >
                        {" "}
                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                      </span>
                    </li>
                  ) : null
                )}

                <div className="itemFilter rounded">
                  <h2>
                    {" "}
                    {
                      store.todoListItems.filter(
                        (item) => item.label !== "sample task"
                      ).length
                    }{" "}
                    item/s left...
                  </h2>
                </div>
              </ul>

              <button
                className="btn mt-2 col-6 itemFilter rounded"
                onClick={() => {
                  actions.deleteAll();
                }}
              >
                Be careful! You can delete all
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <Link to="/home">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
      <br />
    </div>
  );
};
