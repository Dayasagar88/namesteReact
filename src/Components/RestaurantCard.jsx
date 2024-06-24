import React from 'react'



function RestaurantCard(props) {

    const { resData } = props;

    const { image, resName, cusine, rating, price, distance, address } =
      resData?.data;
  
    // console.log(props);
  return (
    //Restaurant Card
    <div className="restaurant-card">
      {/* Res-Image */}
      <div className="res-image">
        <img src={image} alt="res-img" />
      </div>

      <div className="res-details">
        {/* Res-Name and Rating */}
        <div className="res-name-rating">
          <h1>{resName}</h1>
          <div className="rating">
            {rating}
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        {/* Cuisine and Price */}
        <div className="cuisine-price">
          <p className="cuisine">{cusine}</p>
          <p className="price">₹{price}</p>
        </div>

        {/* Address and Distance */}
        <div className="address-distance">
          <p className="address">{address}</p>
          <p className="distance">{distance} Km</p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
