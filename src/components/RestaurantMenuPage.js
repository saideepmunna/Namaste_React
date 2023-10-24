import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenuPage = () => {
  // const [ resInfo, setResInfo ] = useState(null);
  const {resId} = useParams()

  const resInfo = useRestaurantMenu(resId) //Custom Hook
  
  if (resInfo === null ) return <Shimmer />

  const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//   console.log(itemList)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}- {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {
          itemCards.map((item)=>{
            return <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price || item?.card?.info?.defaultPrice }</li>
          })
        }

        {/* <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</li>
        <li>Burgers</li>
        <li>Diet Coke</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenuPage;
