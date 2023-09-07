import { resArr } from "../utils/mockData";
import ResCard from "./Rescard";
import { useState } from "react";

const ResContainer = () =>{
    const [listOfRests, setListOfrests] = useState(resArr)
    const [inputvalue, setInputvalue] = useState("hello")
    return(
        <div>
            <div>
            <button className="filter" onClick={()=>{
                const filteredList = listOfRests.filter((restaurant)=>{
                       return restaurant.info.avgRating >4.2;
                });
                setListOfrests(filteredList); // to update the state Variable which binds with UI.
            }}>Click to filter</button>
            </div>
        <div className="res-container">
             {
                listOfRests.map((rest)=>{
                    return <ResCard key = {rest.info.id} resData = {rest} />
                })
             }
        </div>
        </div>
    )
}

export default ResContainer;