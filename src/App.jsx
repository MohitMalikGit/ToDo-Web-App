import AppName from "./Components/AppName";
import TodoAdder from "./Components/TodoAdder";
import Item from "./Components/item";
import "./App.css";
import ItemContainer from "./Components/ItemContainer";
import { useReducer, useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoContextProvider, { TodoContext } from "./store/to-do-app-store";

function App() {
  return (
    <>
      <TodoContextProvider>
        <AppName> </AppName>
        <TodoAdder />
        <WelcomeMessage />
        <ItemContainer />
      </TodoContextProvider>
    </>
  );
}

export default App;
