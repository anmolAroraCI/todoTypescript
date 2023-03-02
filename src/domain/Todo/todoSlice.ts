import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { TodoState } from "./types";

const initialAllTodoState: TodoState = {
  allTodos: [],
  showSearchResult: false,
  searchTodo: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState: initialAllTodoState,
  reducers: {
    add(state, action) {
      state.allTodos.unshift(action.payload);
    },
    delete(state, action) {
      const newArr = state.allTodos.filter(
        (item) => item.id !== action.payload
      );
      state.allTodos = newArr;

      // delete from searchTodo Array
      const newArr2 = state.searchTodo.filter(
        (item) => item.id !== action.payload
      );
      state.searchTodo = newArr2;

    },
    addFavourite(state, action: PayloadAction<string>) {
      let id = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isFavourite: true };
        }
        return todo;
      });
    },
    removeFavourite(state, action:PayloadAction<string>) {
      let id = action.payload;

      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isFavourite: false };
        }
        return todo;
      });
    },
    toggleSearchResult(state) {
      state.showSearchResult = !state.showSearchResult;
    },
    setSearchTodo(state, action) {
      state.searchTodo = action.payload;
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
export const todoSelector = (state: RootState) => state.allTodos;
export const favTodoselector = createSelector(
  (state: RootState) => state.allTodos,
  (todos) => todos.filter((todo) => todo.isFavourite)
);
