import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img src={assets.logo} alt="" />
        <p>Zomato was founded as FoodieBay in 2008 by Deepinder Goyal and Pankaj Chaddah who worked for Bain & Company. The website started as a restaurant-listing-and-recommendation portal. </p>
        <div className="footer_logo">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
      <div className="footer_middle">
        <h2>COMPANY</h2>
        <div className="menu_list">
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </div>
      </div>
      <div className="footer_right">
        <h2>GET IN TOUCH</h2>
        <p>+91 84508 88339</p>
        <p>temacct@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
