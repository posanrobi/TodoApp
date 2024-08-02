import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = "all";

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    filterTodo: (state, action) => {
      //state = action.payload;
      return action.payload;
    },
  },
});

export const { filterTodo } = filterSlice.actions;
export default filterSlice.reducer;
