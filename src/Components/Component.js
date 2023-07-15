import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchAllData,themeChange } from '../Actions/weatherActions';

const Component = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log('state', state);
  const getAllData=()=>{
    console.log('presss')
    // dispatch(fetchAllData())
dispatch(themeChange())
  }
  return (

   <View>
   <TouchableOpacity onPress={getAllData}>
   <Text style={{color:'red',fontSize:35}}>{state?.weather?.value}</Text>
   </TouchableOpacity>
   </View>
  

  );
};

export default Component;

const styles = StyleSheet.create({});
