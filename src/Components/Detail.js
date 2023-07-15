import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import BG from '../Assets/images/bg.png';
import SUNSET from '../Assets/images/sunset.png';
import SUNRISE from '../Assets/images/sunrise.png';
import WIND from '../Assets/images/wind.png';
import HUMIDITY from '../Assets/images/humidity.png';
import CLOUD from '../Assets/images/cloud.png';
import MAX from '../Assets/images/max.png';
import MIN from '../Assets/images/min.png';
import FEEL from '../Assets/images/feel.png';
// import DEG from '../Assets/images/winddeg.png';
import Header from './Header';
import Loader from '../Loader/Loader';
// <Text>{state.humidity}</Text>
const Detail = ({navigation, route}) => {
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(true)
        },3500)
    },[])
    const [loader,setLoader]=useState(false)
  const name = route?.params?.name;
  const state = useSelector(state => state.weather.weather);
  console.log('<<<<<<<<<<<<<<<<<<<<<<<<', state);
  const move = () => {
    console.log('hllo');
    navigation.goBack();
  };
  const time=new Date(state?.sunset).toLocaleTimeString()
  console.log('time',time)
  // <ImageBackground   source={BG} style={{width:'100%',height:'100%',backgroundColor:`#${Math.random().toFixed(6).slice(2)}`}}  resizeMode='cover'  >
  return (
    !loader ?<Loader/>:
    <ImageBackground
      source={BG}
      style={{width: '100%', height: '100%', backgroundColor: `#fff`}}
      resizeMode="cover">
      <View style={styles.headerContainer}>
        <Header func={move} />
      </View>
      <View style={styles.tempContainer}>
        <Text style={styles.city}>
          {name?.length ? name.toUpperCase() : ''}
        </Text>
        <Text style={styles.temp}>
          {state?.temp}
          <Text style={styles.deg}>C</Text>
        </Text>
      </View>
      <View style={styles.detailBox}>
        <View style={styles.box}>
          <Image source={SUNSET} style={styles.icon} />
          <Text style={styles.textBox}>{new Date(state?.sunset).toLocaleTimeString()?.slice(0,4)} {new Date(state?.sunset).toLocaleTimeString()?.slice(8,10)}</Text>
        </View>
        <View style={styles.box}>
          <Image source={SUNRISE} style={styles.icon} />
          <Text style={styles.textBox}>{new Date(state?.sunrise).toLocaleTimeString()?.slice(0,4)} {new Date(state?.sunrise).toLocaleTimeString()?.slice(8,10)}</Text>
        </View>
        <View style={styles.box}>
          <Image source={CLOUD} style={styles.icon} />
          <Text style={styles.textBox}>{state?.cloud_pct}</Text>
        </View>
        <View style={styles.box}>
          <Image source={WIND} style={styles.icon} />
          <Text style={styles.textBox}>{state?.wind_speed}kmph</Text>
        </View>
        
      </View>
      <View style={styles.detailBox}>
      <View style={styles.box}>
      <Image source={HUMIDITY} style={styles.icon} />
      <Text style={styles.textBox}>{state?.humidity}%</Text>
    </View>
      <View style={styles.box}>
      <Image source={MAX} style={styles.icon} />
      <Text style={styles.textBox}>{state?.max_temp}C</Text>
    </View>
      <View style={styles.box}>
      <Image source={MIN} style={styles.icon} />
      <Text style={styles.textBox}>{state?.min_temp}C</Text>
    </View>
      <View style={styles.box}>
      <Image source={FEEL} style={styles.icon} />
      <Text style={styles.textBox}>{state?.feels_like}C</Text>
    </View>
    
      </View>
    </ImageBackground>
  );
};

export default Detail;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingLeft: 5,
    height: 50,
    // backgroundColor:'red'
  },
  icon: {
    width: 30,
    height: 30,
  },
  textBox:{
    color:'#000'
  },
  tempContainer: {
    width: '100%',
    // height:220,
    // borderColor:'red',
    // borderWidth:1,
    justifyContent: 'center',
  },
  city: {
    fontSize: 35,
    padding: 20,
    fontFamily: 'sarif',
    color: `#00${Math.random().toFixed(4).slice(2)}`,
    textAlign: 'center',
  },
  temp: {
    fontSize: 140,
    padding: 20,
    fontFamily: 'sarif',
    color: `#00${Math.random().toFixed(4).slice(2)}`,
  },
  detailBox: {
    width: '90%',
    height: 80,
    // borderColor:'red',
    // borderWidth:1,
    alignSelf: 'center',
    marginTop: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  box: {
    width: 70,
    height: 70,
    borderWidth: 0.6,
    borderColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    
  },
});
