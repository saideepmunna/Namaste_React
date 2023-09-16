// import { resArr } from "../utils/mockData";
import ResCard from "./Rescard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import StatusError from "./StatusError";

const ResContainer = () => {
  const [listOfRests, setListOfrests] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const [searchTextBtn, setSearchTextBtn] = useState("");

  const [errorRender, setErrorrender] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5917357&lng=73.74562809999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      console.log(data.status);
      if (data.status != 200) {
        throw new Error("Unable to fetch data");
      }

      const json = await data.json();
      //optional chaining
      setListOfrests(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredList(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(typeof err)
      setErrorrender(err.message);
    }
  };

  //Conditional rendering
  //   if(listOfRests.length===0){
  //     return <Shimmer />
  //    }

  return errorRender ? (
    <StatusError />
  ) : filteredList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="additions">
        <div>
          <input
            className="inputBar"
            value={searchTextBtn}
            onChange={(e) => {
              setSearchTextBtn(e.target.value);
            }}
          ></input>
          <button
            className="searchBtn"
            onClick={() => {
              let searchedList = listOfRests.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchTextBtn.toLowerCase());
              });
              setFilteredList(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter"
          onClick={() => {
            const filteredListItems = listOfRests.filter((restaurant) => {
              return restaurant.info.avgRating > 4.2;
            });
            setFilteredList(filteredListItems); // to update the state Variable which binds with UI.
          }}
          //Whenever the state variable updates, React will trigger the reconciliation process(It will re-render the component)
        >
          Click to filter
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((rest) => {
          return <ResCard key={rest?.info?.id} resData={rest} />;
        })}
      </div>
    </>
  );
};

export default ResContainer;
