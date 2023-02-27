import useHeading from "../hooks/use-heading";
import ShowFavouriteList from "../components/todo/ShowFavouriteList";
const FavouritesPage = () => {
  return (
    <div style={{ color: "white" }}>
      {useHeading("Favourites")}
      <ShowFavouriteList />
    </div>
  );
};

export default FavouritesPage;
