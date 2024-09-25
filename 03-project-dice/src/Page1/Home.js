
import Button from '../Button/Button'
import styles from './Home.module.css'


export const Home = () => {

  return (
    <div className={ `${ styles.dsply_home} container` }>
        <img src='images/dices_home.png'></img>
        <div className={styles.homeInput}>
            <h2> DICE GAME </h2>
          <Button text="Play Game" /> 
            
        </div>
        
    </div>
  )
}
