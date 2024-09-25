import { TotalScore} from './TotalScore'
import { InputBox } from './InputBox'
import style from './Navigation.module.css'



const Navigation = () => {



  return (
    <nav className= { `${style.Page2} container`}>
        <TotalScore />
        <InputBox />
    </nav>
  )
}

export default Navigation