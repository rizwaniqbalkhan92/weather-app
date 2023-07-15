import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React,{useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {useSelector,useDispatch}  from 'react-redux'
import Component from './src/Components/Component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import Loader from './src/Loader/Loader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import CitiesList from './src/Components/CitiesList';

const App = () => {
useEffect(()=>{
  SplashScreen.hide();

// (async()=>{  const options = {
//   method: 'GET',
//   url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
//   params: {
//     city: 'Khadro',
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




},[])
  const Stack=createNativeStackNavigator()
  return <Provider store={store}>
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Cities" component={CitiesList} />
  </Stack.Navigator>
</NavigationContainer>
  </Provider>;
};

export default App;

const styles = StyleSheet.create({});
