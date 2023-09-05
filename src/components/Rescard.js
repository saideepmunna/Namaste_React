import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + resData.info.cloudinaryImageId} alt="res-logo" />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default ResCard;
