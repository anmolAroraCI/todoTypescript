import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import EmptyMessage from "../EmptyMessage/EmptyMessage";
import { favTodoselector } from "../../domain/Todo/todoSlice";

const ShowFavouriteList = () => {
  const favTodoArr = useSelector(favTodoselector);
  return (
    <div className="todo-container">
      {favTodoArr.length === 0 && (
        <EmptyMessage
          message="No Favourites"
          shortmessage="...Please add a favourite"
        />
      )}
      {favTodoArr.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default ShowFavouriteList;
