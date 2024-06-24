import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../Utils/MockData";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const [resDetails , setResDetails] = useState(null);

  const {resId} = useParams();
  // // console.log(resId)
  // const Id = resId.split("");
  console.log(resId)

  useEffect(() => {
    setTimeout(() => {
      setResDetails(resList)
    }, 1500);
  }, []);

  if(resDetails === null) return <Shimmer/>;

  const {image, resName, cusine, rating, price, distance, address } =
  resDetails[resId-1]?.data;
  console.log(resDetails[resId])


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
    </div>


  
  );
};

export default RestaurantMenu;
