import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/MockData";
import OfferImage from "../Images/Offer.png";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = ({card}) => {
  // console.log("card" , card);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRestaurantList(card);
      
    }, 1000);
  }, []);

  useEffect(() => {
      setTimeout(() => {
        setRestaurantList(card);
      }, 1000)
      
  }, [card]);




  return restaurantList.length === 0 ? <Shimmer />  :(
    <div className="body">
      {/* Offer image */}
      <div className="Offer-img">
        <img src={OfferImage} alt="Offer-image" />
        <h1>Best Food in Delhi NCR</h1>
      </div>

      {/* Filter buttons */}
      <div className="filter-btn">
        {/* Top rated restaurants btn */}
        <button
          className="TRR_btn"
          onClick={() => {
            const filteredResList = restaurantList.filter(
              (res) => res.data.rating > "4"
            );
            setRestaurantList(filteredResList);
            // console.log(filteredResList);
          }}
        >
          Top Rated Restaurant
        </button>

        <button
          className="TRR_btn"
          onClick={() => {
            setRestaurantList(resList);
          }}
        >
          Show All Restaurant
        </button>
        <button
          className="TRR_btn"
          onClick={() => console.log("Button Clicked!")}
        >
          Top Rated Restaurant
        </button>
      </div>

      {/* Res-Card */}
      <div className="res-cards">
        {restaurantList.map((restaurant) => (
          <Link to={"/restaurantMenu/"+restaurant.data.id} ><RestaurantCard key={restaurant.data.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
