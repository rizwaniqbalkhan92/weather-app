import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

const Loader = () => {
  return (
    <Lottie source={require('../Assets/lottie/weather.json')} autoPlay loop />
  )
}

export default Loader

const styles = StyleSheet.create({})