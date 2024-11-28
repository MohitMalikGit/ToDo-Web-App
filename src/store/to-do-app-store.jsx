import { createContext } from "react";

export const TodoContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

export default TodoContext;
