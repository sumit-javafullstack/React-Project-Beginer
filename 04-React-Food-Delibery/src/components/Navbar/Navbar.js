import './Navbar.css'
import  { assets } from '../../assets/assets'
import { useState } from 'react'

export const Navbar = () => {
  const[menu,setMenu] = useState('home')

  return (
    <div className='navbar'>
    <img src={assets.logo}  alt='' className='logo'></img>
    <ul className='navbar_menu'>
      <li onClick={()=>{setMenu('home')}} className={menu==='home'? 'active' :''}> home </li>
      <li onClick={()=>{setMenu('menu')}} className={menu==='menu'? 'active' :''}> menu </li>
      <li onClick={()=>{setMenu('mobile-app')}} className={menu==='mobile-app'? 'active' :''}> mobile-app </li>
      <li onClick={()=>{setMenu('contact-us')}} className={menu==='contact-us'? 'active' :''}> contact-us </li>
    </ul>
    <div className='navbar_right'>
      <img src={assets.search_icon} alt=''></img>
      <div className='navbar-basket-icon'>
        <img src={assets.basket_icon} alt=''></img>
        <div className='dot'></div> 
      </div>
      <button>sign in</button>
    </div>
    </div>
  )
}
