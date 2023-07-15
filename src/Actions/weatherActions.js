import {cityWeather} from '../SlicerReducer/weatherSlicer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { API_KEY } from '../../config';


export const fetchAllData = (name) => {
  console.log('ALL DATA -----------------',name);
  return async function getAllDataThunk(dispatch, getState) {
    
    // dispatch(cityWeather({data:'hello'}))
   
      const options = {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: {
        city: name,
        country: 'Pakistan'
      },
      headers: {
        'X-RapidAPI-Key':API_KEY ,
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      dispatch(cityWeather(response.data))
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    

    
  };
};

export const themeChange = () => {
  return async function changeThemeThunk(dispatch, getState) {
//     console.log('CHange', getState());
//  const theme=await AsyncStorage.getItem('theme');
//     theme === null || theme === undefined ?
//     // dispatch(changeThemeSetBool()):
//     // dispatch(changeTheme(theme))
  

  };
};
