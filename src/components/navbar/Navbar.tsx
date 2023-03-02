import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import Badge from "../Badge/Badge";
import { favTodoselector, todoSelector } from "../../domain/Todo/todoSlice";

const Navbar = () => {
  const [active, setActive] = useState("link-add");

  const allTodoArr = useSelector(todoSelector);
  const myFavArr = useSelector(favTodoselector);

  function linkClickHandler(e: React.MouseEvent<HTMLElement>) {
    setActive((e.target as HTMLInputElement).id);
    let burger = document.getElementsByClassName("burger-icon")[0];
    let navTabs = document.querySelector(".nav-tabs")!;
    burger.classList.toggle("active");
    navTabs.classList.toggle("active");
  }
  function burgerClickHandler() {
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
        <div className="menu">
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
