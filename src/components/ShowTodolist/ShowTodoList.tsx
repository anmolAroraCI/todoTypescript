import "./ShowTodoList.css";
import { useSelector } from "react-redux";
import { RootState } from "./../../store/store";
import EmptyMessage from "../EmptyMessage/EmptyMessage";
import Heading from "../Heading/Heading";
import TodoItem from "../TodoItem/TodoItem";

function ShowTodoList() {
  let allTodoArr = useSelector((state: RootState) => state.allTodos);
  return (
    <>
      <Heading heading="Show todo" />
      <div className="todo-container">
        {allTodoArr.length === 0 && (
          <EmptyMessage
            message="Nothing Found"
            shortmessage="Please Add a note in Add a note Section"
          />
        )}

        {allTodoArr.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </>
  );
}
export default ShowTodoList;
