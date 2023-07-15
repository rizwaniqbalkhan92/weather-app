import {changeTheme, changeThemeSetBool} from '../SlicerReducer/weatherSlicer';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const fetchAllData = () => {
  console.log('ALL DATA -----------------');
  return async function getAllDataThunk(dispatch, getState) {

    // (async()=>{  const options = {
    //   method: 'GET',
    //   url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    //   params: {
    //     city: 'lahore',
    //     country: 'Pakistan'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': '2817679034msh8b47d6768b1f6ecp1423f0jsnb8cbda6c11ce',
    //     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    //   }
    // };
    
    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }})()
    

    
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
