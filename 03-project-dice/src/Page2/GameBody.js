
import style from './GameBody.module.css'
import Navigation from "./Navigation/Navigation"
import Page2Body from "./body/Page2Body"

 const GameBody = () => {
  return (
    <div className={style.page22}>
        <Navigation />
        <Page2Body />
    </div>
  )
}

export default GameBody;
