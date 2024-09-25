import { createSlice } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux';

export const PlayGameSlice = createSlice({
  name: 'dice',
  initialState: {
    playGame: false,
    diceRollNumber: 0,
    diceSelectedNumber: 0,
    totalScore: 0
  },
  reducers: {
    playFlag: (state,action) => {
      state.playGame = action.payload;
    },
    updateDiceRollNumber: (state,action) => {
      state.diceRollNumber =  action.payload;
    },
    updateSelectedNumber: (state,action) => {
      state.diceSelectedNumber = action.payload;
    },
    updateTotalScore: (state,action) => {
      state.totalScore = state.totalScore + action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { playFlag, updateDiceRollNumber, updateSelectedNumber, updateTotalScore} = PlayGameSlice.actions

export default PlayGameSlice.reducer