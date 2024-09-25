import React from 'react'
import  { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore_menu' id='explore_menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore_menu_text'> Explore the variety of manu from below options for both veg and non-veg items, Order will be served within 30 minutes once the order is placed. </p>
      <div className='explote_menu_list'>
       {
        menu_list.map((item,index)=>(
          <div onClick={()=>setCategory(prev => prev===item.menu_name ?'All': item.menu_name )} key={index} className='explore_menu_list_item'>
            <img className = {category===item.menu_name ? 'active' : ''} src={item.menu_image} alt=''></img>
            <p>{item.menu_name}</p>
          </div>
        ))
       }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
