import React from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/store";
import TodoItem from "./TodoItem";
import EmptyMessage from "../../util/use-emptyMessage";
import "./ShowFavouriteList.css";

const ShowFavouriteList = () => {
  const favTodoArr = useSelector(
    (state: RootState) => state.todoReducer.favTodo
  );
  // let showSearchResult = useSelector((state)=>state.todoReducer.showSearchResult);

  // console.log("favTodoArr",favTodoArr)
  const dispatch = useDispatch();
  const todoDeleteHandler = (id:string) => {
    console.log(id);
    dispatch(todoActions.delete(id));
  };
  return (
    <div className="todo-container">
      {/* todocontainer- */}
      {/* map the array with map function and call todoitem */}
      {favTodoArr.length === 0 && (
        <EmptyMessage
          message="No Favourites"
          shortmessage="...Please add a favourite"
        />
      )}
      {favTodoArr.map((item) => {
        return (
          <TodoItem
            key={item.id}
            todoObj={item}
            todoDelete={todoDeleteHandler}
          />
        );
      })}
    </div>
  );
};

export default ShowFavouriteList;
