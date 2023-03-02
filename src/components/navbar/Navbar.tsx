import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import Badge from "../Badge/Badge";
import { favTodoselector, todoSelector } from "../../domain/Todo/todoSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const allTodoArr = useSelector(todoSelector);
  const myFavArr = useSelector(favTodoselector);
  const burgerRef = useRef<HTMLDivElement>(null);

  function burgerClassToggle() {
    const burger = burgerRef.current;
    if (!burger) {
      return;
    }
    burger.classList.toggle("active");
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
                className={pathname === "/" ? "active" : "Inactive"}
              >
                Add a Todo
              </Link>
            </li>
            <li>
              <Link
                to="/show-todos"
                id="link-show"
                className={pathname === "/show-todos" ? "active" : "Inactive"}
              >
                Show Todos
              </Link>
              <Badge count={allTodoArr.length} />
            </li>
            <li>
              <Link
                to="/favourites"
                id="link-fav"
                className={pathname === "/favourites" ? "active" : "Inactive"}
              >
                Favourites
              </Link>
              <Badge count={myFavArr.length} />
            </li>
          </ul>
        </div>
        <div className="menu">
          <div
            className="burger-icon"
            ref={burgerRef}
            onClick={burgerClassToggle}
          >
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
