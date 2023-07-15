import { configureStore } from '@reduxjs/toolkit'
import weatherSlicer from '../SlicerReducer/weatherSlicer'



export const store = configureStore({
  reducer: {
    weather:weatherSlicer
  },
})