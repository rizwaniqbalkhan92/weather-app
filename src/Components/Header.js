import { StyleSheet, Text,Image, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Back  from '../Assets/images/backarr.png'
const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={props.func} >
      <Image  source={Back}  resizeMode='contain'  style={styles.imgBack} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        width:'100%',
        height:50,
        backgroundColor:'transparent'
    },
    imgBack:{
        width:30,
        height:30,

    }
})