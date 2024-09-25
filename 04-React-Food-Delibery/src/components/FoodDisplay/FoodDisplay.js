import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = (props) => {

    const { food_list } = useContext(StoreContext)


  return (
    <div className='food_display' id='food_display'>
        <h2> Top Dishes near you </h2>
        <div className='food_display_list'>
            {
                props.category==='All'?
                food_list.map((item,index) => (
                    <FoodItem item={item} index={index}/>
                ))
                :
                food_list.filter((item)=>(item.category===props.category)).map((item,index) => (
                    <FoodItem item={item} index={index}/>
                ))

            }
        </div>
    </div>
  )
}

export default FoodDisplay