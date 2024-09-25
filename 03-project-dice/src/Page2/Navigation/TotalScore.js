import style from './TotalScore.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateTotalScore } from '../../slice/PlayGameSlice'

export const TotalScore = () => {

  const btnFlag = useSelector((state) => state.playbtn.playGame)
  const diceNumber = useSelector((state) => state.playbtn.diceRollNumber)
  const boxNumber = useSelector((state) => state.playbtn.diceSelectedNumber)
  const currentScore = useSelector((state) => state.playbtn.totalScore)
  const dispatch = useDispatch();
  if(btnFlag){
    let score= 0;
    console.log(diceNumber)
    console.log(boxNumber)
    if(diceNumber === boxNumber){
      score= diceNumber + boxNumber;
      dispatch(updateTotalScore({totalScore:score}))
    }else{
      score = currentScore - diceNumber;
      dispatch(updateTotalScore({totalScore:score}))
    }
  }
  return (
    <div className={style.score}>
        <h1>{currentScore}</h1>
        <p>Total Score</p>
    </div>
  )
}
