import  { createContext, useEffect, useState } from 'react'
import { food_list } from '../../assets/assets'

export const StoreContext = createContext(null)


const StoreContextProvider = (props) =>{

    const[cartItem,setCartItem] = useState({})
    // { id:number of items}
    // {4:3,8:2,25:5}

    const addToCart= (itemId)=> {
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart= (itemId)=> {
        // if(!cart[itemId]){
        //     setCart((prev)=>({...prev,[itemId]:1}))
        // } else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        // }
    }

    useEffect(()=>{
        console.log(cartItem)
    },[cartItem])

    const contextValue ={
        food_list, // this foodlist will be accessible  by all the components
        cartItem,
        removeFromCart,
        addToCart,
        setCartItem

    }   

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;
