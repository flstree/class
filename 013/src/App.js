import { useState } from "react";
import "./App.css";
import TodoListInput from "./components/TodoListInput";
import TodoListItems from "./components/TodoListItems";

function App() {
  const [items, setItems] = useState([]);

  const addTodoList = (item) => {
    setItems(() => {
      return [...items, item];
    });
  };

  const removeItemFromList = (index) => {
    setItems(() => {
      return items.filter((_, i) => index !== i);
    });
  };

  return (
    <div className="App">
      <p>My TodoList App</p>
      <TodoListInput todoItemAdded={addTodoList} />
      <TodoListItems todoItems={items} onDeleteItem={removeItemFromList} />
    </div>
  );
}

export default App;
