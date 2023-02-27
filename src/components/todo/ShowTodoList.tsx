import "./ShowTodoList.css";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState, todoActions } from "./../../store/store";
import useHeading from "../../hooks/use-heading";
import EmptyMessage from "../../util/use-emptyMessage";

function ShowTodoList() {
  let allTodoArr = useSelector((state:RootState) => state.todoReducer.allTodos);
  let searchTodoArr = useSelector((state:RootState) => state.todoReducer.searchTodo);
  let showSearchResult = useSelector(
    (state:RootState) => state.todoReducer.showSearchResult
  );
  
  const dispatch = useDispatch();

  const todoDeleteHandler = (id:string) => {
    dispatch(todoActions.delete(id));
  };
  const searchCloseHandler = () => {
    dispatch(todoActions.toggleSearchResult());
    searchTodoArr = [];
  };

  return (
    <>
      {useHeading("My Todos")}
      {showSearchResult && (
        <div className="searchHeading font-white-200 text-lg font-bold mt-2 rounded-full border-2 border-white-200">
          <h2>Showing search result...</h2>
          <button className="search_close" onClick={searchCloseHandler} />
        </div>
      )}
      <div className="todo-container">
        {showSearchResult && searchTodoArr.length === 0 && (
          <EmptyMessage
            message="Nothing Found"
            shortmessage="Please Add a note in Add a note Section"
          />
        )}
        {showSearchResult &&
          searchTodoArr.map((item) => {
            return (
              <TodoItem
                key={item.id}
                todoObj={item}
                todoDelete={todoDeleteHandler}
              />
            );
          })}
        {!showSearchResult && allTodoArr.length === 0 && (
          <EmptyMessage
            message="Nothing Found"
            shortmessage="Please Add a note in 'Add a note' Section"
          />
        )}
        {!showSearchResult &&
          allTodoArr.map((item) => {
            return (
              <TodoItem
                key={item.id}
                todoObj={item}
                todoDelete={todoDeleteHandler}
              />
            );
          })}
      </div>
    </>
  );
}
export default ShowTodoList;
