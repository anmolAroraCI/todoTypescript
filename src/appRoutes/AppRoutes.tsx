import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTodoPage from "../domain/Todo/AddTodoPage";
import FavouritesPage from "../domain/Todo/FavouritesPage";
import ShowTodoPage from "../domain/Todo/ShowTodoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddTodoPage />} />
      <Route path="/show-todos" element={<ShowTodoPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
    </Routes>
  );
};

export default AppRoutes;
