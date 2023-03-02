import "./TodoItem.css";
import heartfill from "./../../assets/heartfill.svg";
import heartblank from "./../../assets/heartblank.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Todo } from "../../domain/Todo/types";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { todoActions } from "../../domain/Todo/todoSlice";
import down from "./../../assets/down.svg";
import up from "./../../assets/up.svg";

function TodoItem(props: Todo) {
  const isFavourite = props.isFavourite;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  var today = new Date(JSON.parse(props.date));
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  yyyy = parseInt(yyyy.toString().slice(2));
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  var time = hr + ":" + min + ":" + sec;
  let myDate = mm + "/" + dd + "/" + yyyy;

  const favouriteHandler = () => {
    if (isFavourite) {
      dispatch(todoActions.removeFavourite(props.id));
      toast.info("favourite removed", {
        autoClose: 500,
        hideProgressBar: true,
      });
      return;
    }
    dispatch(todoActions.addFavourite(props.id));
    toast.info("favourite added", {
      autoClose: 500,
      hideProgressBar: true,
    });
  };

  function todoDeleteHandler() {
    dispatch(todoActions.delete(props.id));
    toast.error(`${props.title} deleted`);
  }
  return (
    <motion.div
      className="todoitem"
      transition={{ layout: { duration: 0.75, type: "spring" } }}
      layout
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
          <div className="" data-tip="Favourite">
            <button className="btn-fav" onClick={favouriteHandler}>
              {isFavourite && (
                <img
                  src={heartfill}
                  style={{ width: "55x", height: "55px" }}
                  alt=""
                />
              )}
              {!isFavourite && (
                <img
                  src={heartblank}
                  alt=""
                  style={{ width: "55x", height: "55px" }}
                />
              )}
            </button>
          </div>
          <div className="" data-tip="Delete">
            <button className="delete" onClick={todoDeleteHandler}></button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <motion.div
        className="card-body"
        transition={{ layout: { duration: 0.75, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className="card-header">
          <motion.h3 layout="position" className="title card-title">
            {props.title}
          </motion.h3>
          <motion.div className="more-info">
            {isOpen ? <motion.img src={up} /> : <motion.img src={down} />}
          </motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="expand"
            transition={{ duration: 1 }}
          >
            <p className="description">{props.details}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
export default TodoItem;
