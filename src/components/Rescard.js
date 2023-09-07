const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;

  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="res-logo"
      />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default ResCard;