import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../domain/Todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//added favourite todo[] so that whenever favouurite status changes a new arrays hould be populated, not the old one,---> this problem arised if we erased favourtie status inside of todos in ALl todo tab , its still shwoing in Fav tab---> so for this Whenever fav status is changed, the todo array should be rerendered inside favourite tab, so favourite status should be stored inside a state
