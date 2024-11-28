import { React, useContext } from "react";
import Item from "./item";
import TodoContext from "../store/to-do-app-store";

function ItemContainer() {
  const { todoItems } = useContext(TodoContext);
  return (
    <div className="item-container">
      {todoItems.map((ob) => (
        <Item
          key={ob.TaskName}
          TaskName={ob.TaskName}
          TaskDate={ob.TaskDate}
        ></Item>
      ))}
    </div>
  );
}

export default ItemContainer;
