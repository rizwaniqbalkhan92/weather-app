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

const App = () => {
useEffect(()=>{
  SplashScreen.hide();
},[])
  const Stack=createNativeStackNavigator()
  return <Provider store={store}>
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Component} />
  </Stack.Navigator>
</NavigationContainer>
  </Provider>;
};

export default App;

const styles = StyleSheet.create({});
