//Import createslice function
import { createSlice } from "@reduxjs/toolkit";

//Define the initial state
const initialState = [];

//Create a slice for todos with actions and reducers
const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //Remove Todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //Update Todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //Completed Todos
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

//Export the actions for use in components
export const { addTodos, removeTodos, updateTodos, completeTodos } =
  addTodoReducer.actions;

//Export the reducer to be used in the store
export const reducer = addTodoReducer.reducer;
