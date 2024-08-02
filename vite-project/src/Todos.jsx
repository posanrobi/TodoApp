import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./store/todo-slice.js";

import classes from "./Todos.module.css";
import { MdDone } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

const Todos = () => {
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
      <div className={classes.todoContainer}>
        <div className={classes.inputTodoContainer}>
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder="Add todo"
            className={classes.inputField}
          />
          <button className={classes.addTodoBtn} onClick={handleAddTodo}>
            Add
          </button>
        </div>
        <ul className={classes.todoList}>
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
                  {todo.completed && (
                    <span className={classes.completedTodoText}>
                      Completed!
                    </span>
                  )}
                  {` ${formattedDate} - ${todo.text}`}
                </div>
                <div className={classes.todoItemButtons}>
                  <button
                    className={classes.doneBtn}
                    onClick={() => handleToggleTodo(todo.id)}
                  >
                    {todo.completed ? (
                      <span className={classes.cancelBtn}>Cancel</span>
                    ) : (
                      <MdDone />
                    )}
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className={classes.deleteTodo}
                  >
                    <IoMdTrash />
                  </button>
                </div>
              </li>
            );
          })}
          {todos.length === 0 && (
            <p className={classes.noTodoText}>No todos yet</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Todos;
