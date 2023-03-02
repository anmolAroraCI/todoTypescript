import "./TodoItem.css";
import heartfill from "./../../assets/heartfill.svg";
import heartblank from "./../../assets/heartblank.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { myItem } from "../../domain/Todo/types";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { todoActions } from "../../domain/Todo/todoSlice";

function TodoItem(props: myItem) {
  const [enteredFavouriteStatus, setEnteredFavouriteStatus] = useState(
    props.todoObj.isFavourite
  );
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  var today = new Date(JSON.parse(props.todoObj.date));
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  var time = hr + ":" + min + ":" + sec;
  let myDate = mm + "/" + dd + "/" + yyyy;

  const favouriteHandler = () => {
    if (enteredFavouriteStatus) {
      setEnteredFavouriteStatus(false);
      dispatch(todoActions.removeFavourite(props.todoObj.id));
      dispatch(todoActions.removeFavouriteStatus(props.todoObj.id));
      toast.info("favourite removed", {
        autoClose: 500,
        hideProgressBar: true,
      });
    } else if (!enteredFavouriteStatus) {
      setEnteredFavouriteStatus(true);
      dispatch(todoActions.addFavourite(props.todoObj));
      dispatch(todoActions.setFavouriteStatus(props.todoObj.id));
      toast.info("favourite added", {
        autoClose: 500,
        hideProgressBar: true,
      });
    }
  };
  function todoDeleteHandler() {
    props.todoDelete(props.todoObj.id);
    toast.error(`${props.todoObj.title} deleted`);
  }
  return (
    <motion.div
      className="todoitem"
      transition={{ layout: { duration: 0.75, type: "spring" } }}
      layout
      // onClick={() => setIsOpen(!isOpen)}
      style={{
        borderRadius: "1rem",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
      }}
    >
      <div className="todoHead">
        <div className="date-time">
          <div className="date">{myDate}</div>
          <div className="time">{time}</div>
        </div>
        <div className="todo_actions ">
          {/* <div className="tooltip tooltip-top " data-tip="Favourite"> */}
          {/* tooltip cant be added since menu is hiding under it */}
          <div className="" data-tip="Favourite">
            <button className="btn-fav" onClick={favouriteHandler}>
              {enteredFavouriteStatus && (
                <img
                  src={heartfill}
                  style={{ width: "55x", height: "55px" }}
                  alt=""
                />
              )}
              {!enteredFavouriteStatus && (
                <img
                  src={heartblank}
                  alt=""
                  style={{ width: "55x", height: "55px" }}
                />
              )}
            </button>
          </div>
          {/* <div className="tooltip tooltip-top tooltip-error" data-tip="Delete"> */}
          <div className="" data-tip="Delete">
            <button className="delete" onClick={todoDeleteHandler}></button>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="divider"></div>
      <motion.div
        className="card-body"
        transition={{ layout: { duration: 0.75, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.h3 layout="position" className="title card-title">
          {props.todoObj.title}
        </motion.h3>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="expand"
            transition={{ duration: 1 }}
          >
            <p className="description">{props.todoObj.details}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
export default TodoItem;
