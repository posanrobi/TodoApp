import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { filterTodo } from "../store/filter-slice";

import classes from "./TodoFilter.module.css";

const TodoFilter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleTodoFilter = (filterValue) => {
    dispatch(filterTodo(filterValue));
  };

  return (
    <>
      <div className={classes.inputContainer}>
        <Input
          name="All"
          type="checkbox"
          id="all"
          className={classes.filterContainer}
          checked={filter === "all"}
          onChange={() => handleTodoFilter("all")}
        />
        <Input
          name="Active"
          type="checkbox"
          className={classes.filterContainer}
          checked={filter === "active"}
          onChange={() => handleTodoFilter("active")}
        />
        <Input
          name="Completed"
          type="checkbox"
          className={classes.filterContainer}
          checked={filter === "completed"}
          onChange={() => handleTodoFilter("completed")}
        />
      </div>
    </>
  );
};

export default TodoFilter;
