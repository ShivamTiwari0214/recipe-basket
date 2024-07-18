import "./homeFoodCard.css";
export const HomeFoodCard = (props) => {
  return (
    <div className="foodSuggestion">

      <div className="homeFoodCard">
        <div
          className="homeFoodCardImage"
          style={{
            background: `url("https://wallpapercave.com/wp/wp3376127.jpg") lightgray 50% / cover no-repeat`,
          }}
        >
          <div className="blurLayer"></div>
          <p className="foodName">{props.dishName}</p>
        </div>
        <p className="cuisineName">{props.cuisine}</p>
      </div>

      <div className="homeFoodCard">
        <div
          className="homeFoodCardImage"
          style={{
            background: `url("https://img-global.cpcdn.com/recipes/ce884d070a8abf57/1200x630cq70/photo.jpg") lightgray 50% / cover no-repeat`,
          }}
        >
          <div className="blurLayer"></div>
          <p className="foodName">{props.dishName}</p>
        </div>
        <p className="cuisineName">{props.cuisine}</p>
      </div>
      <div className="homeFoodCard">
        <div
          className="homeFoodCardImage"
          style={{
            background: `url("https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/08/kadai-paneer-gravy-recipe-step-by-step-instructions.jpg?w=1612&quality=65&strip=all&ssl=1") lightgray 50% / cover no-repeat`,
          }}
        >
          <div className="blurLayer"></div>
          <p className="foodName">{props.dishName}</p>
        </div>
        <p className="cuisineName">{props.cuisine}</p>
      </div>
    </div>
  );
};
