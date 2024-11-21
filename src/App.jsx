import AppName from "./Components/AppName";
import TodoAdder from "./Components/TodoAdder";
import Item from "./Components/item";
import "./App.css";
import ItemContainer from "./Components/ItemContainer";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [list, setList] = useState([]);

  const addList = (name, date) => {
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
      <AppName> </AppName>
      <TodoAdder addList={addList}></TodoAdder>
      {list.length == 0 ? <WelcomeMessage></WelcomeMessage> : <></>}{" "}
      <ItemContainer
        List={list}
        SetList={setList}
        deleteList={deleteList}
      ></ItemContainer>
    </>
  );
}

export default App;
