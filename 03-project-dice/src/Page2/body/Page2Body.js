import { useState } from "react";
import Button from "../../Button/Button"
import style from './Page2Body.module.css'
import { updateDiceRollNumber } from '../../slice/PlayGameSlice'
import { useDispatch } from 'react-redux';


const Page2Body = () => {
  const dispatch = useDispatch();
  const[imageName,setImageName] = useState('images/dice_1')

  const generateRandomNumber = (min, max) => {
    
    return Math.floor(Math.random() * (max - min) + min);
  };


  const imgaeSelectorHandler = ()=>{
    const randomNumber = generateRandomNumber(1, 7);
    setImageName('images/dice_'+ randomNumber)
    dispatch(updateDiceRollNumber({diceRollNumber:randomNumber}))
  }
  return (
    <div className= {`${style.page2body} container`}>
        <div className={style.dice_roll}>
            <img src={`${imageName}.png`} alt="text"
            onClick={imgaeSelectorHandler}
            ></img> 
            <p> Click on the dice to Roll</p>
        </div>
         <div className={style.page2_body_btn}>
         <Button text='Reset Score' bgc_fill='true'/>
         <Button text='Show Rules'  />  
            
        </div>   
    </div>
  )
}

export default Page2Body