import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./store/store.js";
import classes from "./Todos.module.css";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Add todo"
          className={classes.inputField}
        />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
          {todos.map((todo) => {
            const date = new Date(todo.id);
            const formattedDate = date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });

            const itemClass = todo.completed
              ? `${classes.todoItem} ${classes.completedTodo}`
              : classes.todoItem;

            return (
              <li key={todo.id} className={`${itemClass}`}>
                <div className={classes.todoItemText}>
                  {`${todo.completed ? "Completed!" : ""} ${formattedDate} - ${
                    todo.text
                  }`}
                </div>
                <div className={classes.todoItemButtons}>
                  <button onClick={() => handleToggleTodo(todo.id)}>{`${
                    todo.completed ? "Cancel" : "Done"
                  }`}</button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className={classes.deleteTodo}
                  >
                    Del
                  </button>
                </div>
              </li>
            );
          })}
          {todos.length === 0 && <p>No todos yet</p>}
        </ul>
      </div>
    </>
  );
}
export default App;
