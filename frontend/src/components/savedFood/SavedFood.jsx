import "./SavedFood.css";
import { FoodCard } from "../foodCard/FoodCard";
import { PageHeading } from "../heading/PageHeading";
import { Link } from "react-router-dom";
function SavedFood() {
  const savedFoodItems = [
    {
      Name: "Pizza",
      cuisine: "Indian",
      image: "https://wallpapercave.com/wp/wp3376127.jpg",
    },
    {
      Name: "Pizza",
      cuisine: "Indian",
      image: "https://wallpapercave.com/wp/wp3376127.jpg",
    },
    {
      Name: "Pizza",
      cuisine: "Indian",
      image: "https://wallpapercave.com/wp/wp3376127.jpg",
    },
    {
      Name: "Pizza",
      cuisine: "Indian",
      image: "https://wallpapercave.com/wp/wp3376127.jpg",
    },
    {
      Name: "Pizza",
      cuisine: "Indian",
      image: "https://wallpapercave.com/wp/wp3376127.jpg",
    },
  ];

  return (
    <div className="savedDiv">
      <PageHeading top="Your" bottom="Recipe Collection" />
      <div className="foodcards">
        <FoodCard dishes={savedFoodItems} />
        <div className="backButton">
          <Link to="/">
            <button className="next " type="submit">
              <i className="fa-solid fa-angle-left"></i> Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SavedFood;
