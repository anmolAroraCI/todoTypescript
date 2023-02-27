import React from "react";
import { Routes, Route } from "react-router-dom";
import Card from "../components/ui/Card";
import AddTodoPage from "../pages/AddTodoPage";
import FavouritesPage from "../pages/FavouritesPage";
import ShowTodoPage from "../pages/ShowTodoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddTodoPage />} />
      <Route path="/show-todos" element={<ShowTodoPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      {/* <Route path="/random" element={<Card />} /> */}
    </Routes>
  );
};

export default AppRoutes;
