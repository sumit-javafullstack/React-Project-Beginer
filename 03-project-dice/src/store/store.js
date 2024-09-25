import { configureStore } from '@reduxjs/toolkit'
import PlayGameSlice from '../slice/PlayGameSlice'

export default configureStore({
  reducer: {
    playbtn : PlayGameSlice
  },
})