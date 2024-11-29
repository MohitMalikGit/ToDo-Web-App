import React from "react";
import css from "./TodoAdder.module.css";
import { useState, useRef, useContext } from "react";
import { MdNoteAdd } from "react-icons/md";
import { TodoContext } from "../store/to-do-app-store";
function TodoAdder() {
  const { addNewItem } = useContext(TodoContext);
  const nameRef = useRef("");
  const dateRef = useRef("");

  return (
    <div className="row">
      <div className="col-4">
        <input type="text" placeholder="Enter Todo Here" ref={nameRef} />
      </div>
      <div className="col-4">
        <input type="Date" ref={dateRef} />
      </div>
      <div className="col-4 text-start">
        <button
          type="button"
          className={`btn btn-success ${css.MyButton}`}
          onClick={() =>
            addNewItem(nameRef.current.value, dateRef.current.value)
          }
        >
          <MdNoteAdd />
        </button>
      </div>
    </div>
  );
}

export default TodoAdder;
