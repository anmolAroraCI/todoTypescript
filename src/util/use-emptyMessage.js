import { useSelector } from "react-redux";

const EmptyMessage = ({message,shortmessage}) => {
  // const allTodoArr = useSelector((state) => state.todoReducer.allTodo);

  return (
    <>
      {(
        <p style={{ fontWeight: "bold", margin: "auto", fontSize: "4rem" }}>
          {message}
          <br />
          <span style={{ color: "grey", fontSize: "2rem" }}>
            {shortmessage}
          </span>
        </p>
      )}
    </>
  );
};
export default EmptyMessage;
