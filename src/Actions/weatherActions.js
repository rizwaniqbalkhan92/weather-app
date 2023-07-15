import {changeTheme, changeThemeSetBool} from '../SlicerReducer/weatherSlicer';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const fetchAllData = () => {
  console.log('ALL DATA -----------------');
  return async function getAllDataThunk(dispatch, getState) {
    // try {
    console.log('ALL DATA -----------------',);
 
    // } catch (err) {
    //   console.log('Error--------', err);

    // }

   

    
  };
};

export const themeChange = () => {
  return async function changeThemeThunk(dispatch, getState) {
    console.log('CHange', getState());
 const theme=await AsyncStorage.getItem('theme');
    theme === null || theme === undefined ?
    dispatch(changeThemeSetBool()):
    dispatch(changeTheme(theme))
  

  };
};
