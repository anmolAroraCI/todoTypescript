import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./Navbar.css";
import { toast } from "react-toastify";
import Badge from "../Badge/badge";
import {
  favTodoselector,
  todoActions,
  todoSelector,
} from "../../domain/Todo/todoSlice";

const Navbar = () => {
  const [active, setActive] = useState("link-add");

  const allTodoArr = useSelector(todoSelector);
  const myFavArr = useSelector(favTodoselector);
  const showSearchResult = useSelector(
    (state: RootState) => state.showSearchResult
  );
  const dispatch = useDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const searchHandler = (event: React.MouseEvent<HTMLElement>) => {
    let searchText;
    if (searchInputRef.current) {
      searchText = searchInputRef.current.value;
    }
    if (searchText) {
      const searchArr = [];
      for (let i = 0; i < allTodoArr.length; i++) {
        if (
          allTodoArr[i].title.includes(searchText) ||
          allTodoArr[i].details.includes(searchText)
        ) {
          searchArr.push(allTodoArr[i]);
        }
      }
      dispatch(todoActions.toggleSearchResult());
      navigate("/show-todos", { replace: true });
      console.log(searchArr);
      dispatch(todoActions.setSearchTodo(searchArr));
    } else {
      toast.error("enter some search content");
    }
    searchInputRef.current!.value = "";
  };
  function linkClickHandler(e: React.MouseEvent<HTMLElement>) {
    setActive((e.target as HTMLInputElement).id);
    let burger = document.getElementsByClassName("burger-icon")[0];
    let navTabs = document.querySelector(".nav-tabs")!;
    burger.classList.toggle("active");
    navTabs.classList.toggle("active");
  }
  function burgerClickHandler() {
    console.log("burger clicked");
    let burger = document.getElementsByClassName("burger-icon")[0];
    let navTabs = document.querySelector(".nav-tabs")!;
    burger.classList.toggle("active");
    navTabs.classList.toggle("active");
  }
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <Link to="/">My Todos</Link>
        </div>
        <div className="nav-tabs">
          <ul>
            <li>
              <Link
                to="/"
                id="link-add"
                className={active === "link-add" ? "active" : "Inactive"}
                onClick={linkClickHandler}
              >
                Add a Todo
              </Link>
            </li>
            <li>
              <Link
                to="/show-todos"
                id="link-show"
                className={active === "link-show" ? "active" : "Inactive"}
                onClick={linkClickHandler}
              >
                Show Todos
              </Link>
              <Badge count={allTodoArr.length} />
            </li>
            <li>
              <Link
                to="/favourites"
                id="link-fav"
                className={active === "link-fav" ? "active" : "Inactive"}
                onClick={linkClickHandler}
              >
                Favourites
              </Link>
              <Badge count={myFavArr.length} />
            </li>
          </ul>
        </div>
        <div className="search">
          <input
            type="text"
            className="search-box"
            ref={searchInputRef}
            placeholder="Search a Note?"
          />
          &nbsp;&nbsp;
          {!showSearchResult ? (
            <i
              className="fa fa-search"
              aria-hidden="true"
              onClick={searchHandler}
            ></i>
          ) : (
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => dispatch(todoActions.toggleSearchResult())}
            ></i>
          )}
          <div className="burger-icon" onClick={burgerClickHandler}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
