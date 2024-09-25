import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = (props) => {
  const{cartItem, removeFromCart, addToCart} = useContext(StoreContext);

  return (
    <div className="food_item_list">
      <div className="food_item_image">
        <img src={props.item.image} alt="" />
        <div className="add_items">
          {!cartItem[props.item._id] ? (
            <div className="add">
              <img
                onClick={() => addToCart(props.item._id)}
                src={assets.add_icon_white}
                alt=""
              />
            </div>
          ) : (
            <div className="food_item_counter">
              <img
                onClick={() => removeFromCart(props.item._id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItem[props.item._id]}</p>
              <img
                onClick={() => addToCart(props.item._id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
      </div>

      <div className="food_item_name">
        <h2>{props.item.name}</h2>
        <img src={assets.rating_starts} alt="" />
      </div>

      <div className="item_description">
        <p>{props.item.description}</p>
      </div>

      <div className="item_price">
        <p>${props.item.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
