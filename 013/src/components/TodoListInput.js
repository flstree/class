import { useState } from "react";

function TodoListInput({ todoItemAdded }) {
  const [todo, setTodo] = useState("");

  const setInput = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    todoItemAdded(todo);
  };

  return (
    <div>
      <input
        type="text"
        name="todoListInput"
        id="todoListInput"
        placeholder="What do you want to do?"
        onChange={setInput}
      />
      <button id="todoListButton" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default TodoListInput;
