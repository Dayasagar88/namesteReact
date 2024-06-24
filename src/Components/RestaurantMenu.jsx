import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../Utils/MockData";
import { redirect, useParams } from "react-router-dom";
import { MENU_DATA_URL } from "../Utils/Constants";

const RestaurantMenu = () => {

  const [resDetails , setResDetails] = useState(null);

  const [menu, setMenu] = useState([]);

  const {resId} = useParams();
  console.log(resId)
  useEffect(() => {
    fetchMenu();
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setResDetails(resList)
    }, 1500);
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_DATA_URL)
    const response = await data.json()
    console.log(response)
      setMenu(response);
    // console.log(menu)
  }



  

  if(resDetails === null  && menu.length === 0){
    return <shimmer/>
  }

  console.log(resDetails)


  const {title} = menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const {image, resName, cusine, rating, price, distance, address } =
  resDetails[resId-1]?.data; 


  return (
    <div className="restaurant-menu-container">
      <div className="resDetails">
        <img className="resImage" src={image} alt="" />
        <div className="res-name-rating">
          <h1 className="name">{resName}</h1>
          <p className="resRating">{rating}</p>
        </div>
        <div className="res-cusine-price">
          <p className="res-cusine">{cusine}</p>
          <p className="price">{price}</p>
        </div>
        <p className="resAddress">{address}</p>
      </div>

      <div className="menu-header">
        <h4 className="heading">Menu</h4>
        <div className="search-conatiner">
        <input className="menu-search" type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="veg-nonveg-btn">
          <button className="veg-btn">veg</button>
          <button className="nonveg-btn">nonveg</button>
        </div>

        <div className="menu-category-box">
          <div className="recommended-menu">
          <h1>{title}</h1>

          </div>


        </div>


      </div>
    </div>


  
  );
};

export default RestaurantMenu;
