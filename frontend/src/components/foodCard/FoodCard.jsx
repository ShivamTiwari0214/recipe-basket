import "./FoodCard.css";
export const FoodCard = (props) => {
  return (
    < >
      {props.dishes.map((value, index) => {
        return (
          <div key={index} className="homeFoodCard">
            <div
              className="homeFoodCardImage"
              style={{
                background: `url(${props.dishes[index].image}) lightgray 50% / cover no-repeat`,
              }}
            >
              <div className="blurLayer"></div>
              <p className="foodName">{props.dishes[index].Name}</p>
            </div>
            <p className="cuisineName">{props.dishes[index].cuisine}</p>
          </div>
        );
      })}
    </>
  );
};
