import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import resList from "../Utils/MockData";
import { Link } from "react-router-dom";



function Header({updateData}) {
  
  console.log("typeof updateData",typeof(updateData))
  const [btnText, setBtnText] = useState("Login");
  const [searchText, setSearchText] = useState("");

  //Whenever the state variable changes/updates, react will be trigger and begin the reconsiliation cycle(Re-render the component.
  const searchHandler = () => {
    const filteredResList = resList.filter((res) =>  res?.data?.resName.toLowerCase().includes(searchText.toLowerCase()));
    updateData(filteredResList);
  }



  return (
    //Header
    <div className="header">
      <div className="sub-header">
        {/* Logo-Container */}
        <div className="logo">
          <img src={LOGO_URL} alt="image" />
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search your favorite food or restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(searchText);
            }}
          />
          <button className="search-btn" onClick={searchHandler}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Nav-Items-Container */}
        <div className="nav-items">
          <ul>
            <li > <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About Us</Link> </li>
            <li> <Link to="/contactUs">Contact Us</Link> </li>
            {/* <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li> */}
            <li
              className="login-btn"
              onClick={() => {
                btnText === "Login"
                  ? setBtnText("Logout")
                  : setBtnText("Login");
              }}
            >
              {btnText}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
