import { createContext, useReducer } from "react";

export const TodoContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const mylistAction = (list, action) => {
  if (action.type === "add") {
    if (action.payload.name.length != 0 && action.payload.date.length != 0)
      list = list.concat({
        TaskName: action.payload.name,
        TaskDate: action.payload.date,
      });
  } else if (action.type === "delete") {
    list = list.filter((item) => item.TaskName != action.payload.itemName);
  }
  return list;
};

const TodoContextProvider = ({ children }) => {
  const [list, dispatchMyList] = useReducer(mylistAction, []);
  const addList = (name, date) => {
    const addAction = {
      type: "add",
      payload: {
        name,
        date,
      },
    };
    dispatchMyList(addAction);
  };

  const deleteList = (itemName) => {
    const deleteAction = {
      type: "delete",
      payload: {
        itemName,
      },
    };
    dispatchMyList(deleteAction);
  };

  return (
    <TodoContext.Provider
      value={{
        todoItems: list,
        addNewItem: addList,
        deleteItem: deleteList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
