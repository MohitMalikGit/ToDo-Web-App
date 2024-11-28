import AppName from "./Components/AppName";
import TodoAdder from "./Components/TodoAdder";
import Item from "./Components/item";
import "./App.css";
import ItemContainer from "./Components/ItemContainer";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoContext from "./store/to-do-app-store";

function App() {
  const [list, setList] = useState([]);

  const addList = (name, date) => {
    if (name.length != 0 && date.length != 0)
      setList(
        list.concat({
          TaskName: `${name}`,
          TaskDate: `${date}`,
        })
      );
  };

  const deleteList = (itemName) => {
    const newList = list.filter((item) => item.TaskName != itemName);
    setList(newList);
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          todoItems: list,
          addNewItem: addList,
          deleteItem: deleteList,
        }}
      >
        <AppName> </AppName>
        <TodoAdder />
        <WelcomeMessage />
        <ItemContainer />
      </TodoContext.Provider>
    </>
  );
}

export default App;
