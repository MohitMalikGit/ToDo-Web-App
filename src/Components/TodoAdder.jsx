import React from "react";
import css from "./TodoAdder.module.css";
import { useState } from "react";
import { MdNoteAdd } from "react-icons/md";
function TodoAdder({ addList }) {
  const [name, changeName] = useState("");
  const [date, changeDate] = useState("");

  const handelName = (event) => {
    changeName(event.target.value);
  };

  const handelDate = (event) => {
    changeDate(event.target.value);
  };

  const handleClick = () => {
    addList(name, date);
    changeDate("");
    changeName("");
  };

  return (
    <div className="row">
      <div className="col-4">
        <input
          type="text"
          placeholder="Enter Todo Here"
          onChange={handelName}
          value={name}
        />
      </div>
      <div className="col-4">
        <input type="Date" value={date} onChange={handelDate} />
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
