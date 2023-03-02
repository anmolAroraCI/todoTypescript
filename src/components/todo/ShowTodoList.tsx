import "./ShowTodoList.css";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./../../store/store";
import EmptyMessage from "../EmptyMessage/EmptyMessage";
import Heading from "../Heading/Heading";
import { todoActions } from "../../domain/Todo/todoSlice";

function ShowTodoList() {
  let allTodoArr = useSelector(
    (state: RootState) => state.allTodos
  );
  let searchTodoArr = useSelector(
    (state: RootState) => state.searchTodo
  );
  let showSearchResult = useSelector(
    (state: RootState) => state.showSearchResult
  );

  const dispatch = useDispatch();

  const todoDeleteHandler = (id: string) => {
    dispatch(todoActions.delete(id));
  };
  const searchCloseHandler = () => {
    dispatch(todoActions.toggleSearchResult());
    searchTodoArr = [];
  };

  return (
    <>
      <Heading heading="Show todo" />
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
