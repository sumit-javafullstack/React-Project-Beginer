
import styles from './Button.module.css'
import {  useDispatch } from 'react-redux'
import { playFlag } from '../slice/PlayGameSlice'


const Button = (props) => {
 
  const dispatch = useDispatch()
  
  return (
    <div >
        <button className= { props.bgc_fill ? styles.home_btn2 :styles.home_btn1}
         onClick={() => dispatch(playFlag({playGame: true}))} > {props.text} </button>
    </div>
  ) 
}

export default Button