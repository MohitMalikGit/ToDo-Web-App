import React from "react";
import css from "./Item.module.css";
import { AiFillDelete } from "react-icons/ai";
function Item(props) {
  return (
    <div className="row">
      <div className="col-4">{props.TaskName}</div>
      <div className="col-4">{props.TaskDate}</div>
      <div className="col-4">
        <button
          type="button"
          className={`btn btn-danger ${css.MyButton}`}
          onClick={() => props.deleteList(props.TaskName)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default Item;
