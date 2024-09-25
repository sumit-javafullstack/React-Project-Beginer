import { useState } from 'react'
import style from './InputBox.module.css'
import { updateSelectedNumber } from '../../slice/PlayGameSlice'
import { useDispatch } from 'react-redux';


let dicenumber=0;
export const InputBox = () => {
    const[diceNumber,setDiceNumber]=useState(false)

    const arr = [1,2,3,4,5,6]
    const dispatch = useDispatch();
    const diceBtnHandler = (value) =>{
        
        dicenumber = value;
        diceNumber?setDiceNumber(false):setDiceNumber(true)
        dispatch(updateSelectedNumber({diceSelectedNumber:value}))
    }

  return (

    <div  className={style.page2_nav}>  
    <div className={style.options}>
        {arr.map((value,index) => (
                <p 
                key={index} 
                className={style.box}
                style= {{
                  backgroundColor: diceNumber && value == dicenumber ? 'black' : 'white',
                  color: diceNumber && value == dicenumber ? 'white' : 'black',
                }}
                onClick={()=>diceBtnHandler(value)}>
                {value}
                </p>
            ))}</div>
    <p> Select Number</p>
    </div>
  )
}
