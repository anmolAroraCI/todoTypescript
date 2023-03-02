import Heading from "../components/ui/Heading";
import ShowFavouriteList from "../components/todo/ShowFavouriteList";
const FavouritesPage = () => {
  return (
    <div style={{ color: "white" }}>
      <Heading heading="Favourites" />
      <ShowFavouriteList />
    </div>
  );
};

export default FavouritesPage;
