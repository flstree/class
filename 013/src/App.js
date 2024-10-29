import "./App.css";
import TodoListInput from "./components/TodoListInput";
import TodoListItems from "./components/TodoListItems";

function App() {
  return (
    <div className="App">
      <p>My TodoList application</p>
      <TodoListInput />
      <TodoListItems />
    </div>
  );
}

export default App;
