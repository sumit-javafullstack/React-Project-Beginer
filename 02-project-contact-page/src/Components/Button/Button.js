
import styles from './Button.module.css'
const Button = (props) => {
  return (
    <div>
        <button className={props.isOutline ? styles.outlineBtn : styles.contactBtn}> 
        {props.icon}
        {props.text}
        </button>
    </div>
  )
}

export default Button