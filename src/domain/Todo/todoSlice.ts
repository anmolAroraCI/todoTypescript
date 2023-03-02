import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { TodoState } from "./types";

const initialAllTodoState: TodoState = {
  allTodos: [],
  favTodo: [],
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
      // delete from allTodo Array
      const newArr = state.allTodos.filter(
        (item) => item.id !== action.payload
      );
      state.allTodos = newArr;

      // delete from searchTodo Array
      const newArr2 = state.searchTodo.filter(
        (item) => item.id !== action.payload
      );
      state.searchTodo = newArr2;

      // delete from favTodo Array
      const newArr3 = state.favTodo.filter(
        (item) => item.id !== action.payload
      );
      state.favTodo = newArr3;
    },
    addFavourite(state, action) {
      state.favTodo.unshift(action.payload);

      //add favourite status in All todo
      let id = action.payload.id;
      for (let i = 0; i < state.allTodos.length; i++) {
        if (state.allTodos[i].id === id) state.allTodos[i].isFavourite = true;
      }
    },
    removeFavourite(state, action) {
      const newArr = state.favTodo.filter((item) => item.id !== action.payload);
      state.favTodo = newArr;
      //remove favourite status in All todo
      let id = action.payload;
      for (let i = 0; i < state.allTodos.length; i++) {
        if (state.allTodos[i].id === id) state.allTodos[i].isFavourite = false;
      }
    },
    setFavouriteStatus(state, action) {
      var id = action.payload;
      for (let i = 0; i < state.favTodo.length; i++) {
        if (state.favTodo[i].id === id) state.favTodo[i].isFavourite = true;
      }
    },
    removeFavouriteStatus(state, action) {
      var id = action.payload;
      for (let i = 0; i < state.favTodo.length; i++) {
        if (state.favTodo[i].id === id) state.favTodo[i].isFavourite = false;
      }
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
