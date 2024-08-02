import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
import filterSlice from "./filter-slice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    filter: filterSlice,
  },
});

export default store;
