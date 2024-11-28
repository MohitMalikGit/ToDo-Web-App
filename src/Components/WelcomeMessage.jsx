import { useContext } from "react";
import TodoContext from "../store/to-do-app-store";
const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoContext);
  return todoItems.length == 0 && <p> Enjoy your day!</p>;
};

export default WelcomeMessage;
