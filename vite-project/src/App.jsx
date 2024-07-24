import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/store";

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
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </>
  );
}

export default App;
