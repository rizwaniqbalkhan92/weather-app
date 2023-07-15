import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  theme:false
}

export const weatherSlicer = createSlice({
  name: 'weather',
  initialState,
  reducers: {


}
})

// Action creators are generated for each case reducer function
export const {changeTheme,changeThemeSetBool} = weatherSlicer.actions

export default weatherSlicer.reducer