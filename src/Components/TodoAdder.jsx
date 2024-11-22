import React from "react";
import css from "./TodoAdder.module.css";
import { useState, useRef } from "react";
import { MdNoteAdd } from "react-icons/md";
function TodoAdder({ addList }) {
  const [name, changeName] = useState("");
  const [date, changeDate] = useState("");
  const nameRef = useRef("");
  const dateRef = useRef("");

  const handleClick = () => {
    addList(nameRef.current.value, dateRef.current.value);
    nameRef.current.value = "";
    dateRef.current.value = "";
  };

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
          onClick={handleClick}
        >
          <MdNoteAdd />
        </button>
      </div>
    </div>
  );
}

export default TodoAdder;
