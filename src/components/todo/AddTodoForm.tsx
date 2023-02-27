import "./AddTodoForm.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import heartfill from "./../../assets/heartfill.svg";
import heartblank from "./../../assets/heartblank.svg";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { RootState, todoActions } from "./../../store/store";
import useHeading from "../../hooks/use-heading";
import { toast } from "react-toastify";
import { motion } from "framer-motion"
// import Radium, { StyleRoot } from "radium";

function AddTodoForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const todoArr = useSelector((state: RootState) => state.todoReducer.allTodos);
  const dispatch = useDispatch();
  const [enteredFavouriteStatus, setEnteredFavouriteStatus] = useState(false);

  function onAddNoteHandler(event: React.MouseEvent<HTMLElement>) {
    const enteredTitle = titleRef.current!.value;
    const enteredDescription = descriptionRef.current!.value;
    if (enteredTitle !== "" && enteredDescription !== "") {
      navigate("/show-todos", { replace: true });
    }

    const newTodoObj = {
      id: uuidv4(),
      title: enteredTitle,
      details: enteredDescription,
      date: JSON.stringify(new Date()),
      isFavourite: enteredFavouriteStatus,
    };
    if ((enteredTitle && enteredDescription) || enteredTitle) {
      dispatch(todoActions.add(newTodoObj));
      toast.success(`${newTodoObj.title} Todo added`);

      if (enteredFavouriteStatus) {
        dispatch(todoActions.addFavourite(newTodoObj));
      } else {
        dispatch(todoActions.removeFavourite(newTodoObj.id));
      }
    }
  }
  const favouriteHandler = () => {
    setEnteredFavouriteStatus(!enteredFavouriteStatus);
    if (enteredFavouriteStatus) {
      toast.info("favourite removed");
    } else {
      toast.info("favourite added");
    }
  };

  return (
    <>
      {useHeading("Add TODO")}
      <div className="AddTodo">
        <h2>Add a todo</h2>
        <form id="my-form">
          <div className="head">
            <label htmlFor="title">Title</label>
            {/* <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
              id="title"
              ref={titleRef}
              required
            /> */}
            <input
              className="input-title"
              id="title"
              placeholder="Todo Title"
              type="text"
              ref={titleRef}
              required
            ></input>
          </div>
          <div className="body">
            <label htmlFor="description">Details</label>
            <textarea
              className="textarea textarea-bordered"
              id="description"
              rows={4}
              cols={30}
              placeholder="Today I want to accomplish this task..."
              ref={descriptionRef}
            ></textarea>
          </div>
        </form>
        <div className="controls">
          <div className="tooltip tooltip-bottom tooltip-error" data-tip="Favourite">
            <button className="btn-fav" onClick={favouriteHandler}>
              {enteredFavouriteStatus ? (
                <img
                  src={heartfill}
                  style={{ width: "55x", height: "55px" }}
                  alt=""
                />
              ) : (
                <img
                  src={heartblank}
                  alt=""
                  style={{ width: "55x", height: "55px" }}
                />
              )}
            </button>
          </div>

          <button
            type="submit"
            form="my-form"
            className="btn btn-outline rounded-full"
            onClick={onAddNoteHandler}
          >
            Add Note
          </button>
        </div>
      </div>
    </>
  );
}
export default AddTodoForm;