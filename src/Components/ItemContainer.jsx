import React from "react";
import Item from "./item";

function ItemContainer({ List, deleteList }) {
  return (
    <div className="item-container">
      {List.map((ob) => (
        <Item
          key={ob.TaskName}
          TaskName={ob.TaskName}
          TaskDate={ob.TaskDate}
          deleteList={deleteList}
        ></Item>
      ))}
    </div>
  );
}

export default ItemContainer;
