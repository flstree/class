function TodoListItems({ todoItems, onDeleteItem }) {
  return (
    <div>
      <ul className="list">
        {todoItems?.map((item, index) => {
          return (
            <li key={index}>
              {item} -{" "}
              <button onClick={(e) => onDeleteItem(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoListItems;
