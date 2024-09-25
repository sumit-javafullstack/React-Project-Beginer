
import { useState } from 'react';
import './App.css';
import { Home } from './Page1/Home';
import GameBody from './Page2/GameBody'
import { useSelector } from 'react-redux'

function App() {

  const btnFlag = useSelector((state) => state.playbtn.playGame)


  return (    
    <div >
      {!btnFlag && <Home />}
      {btnFlag && <GameBody />}
    </div>
    
  );
}

export default App;
