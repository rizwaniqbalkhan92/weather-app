import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import Loader from '../Loader/Loader';

const CitiesList = () => {
    const [city,setCity]=useState('')
  const cities = useSelector(state => state?.weather?.cities);
  return (
    <>
      <Search city={city} setCity={setCity}   />
      <ListCity data={cities} city={city} />
    </>
  );
};

export default CitiesList;

const Search = ({city,setCity}) => {
  return <TextInput placeholder="Search City...."   onChangeText={e=>setCity(e)} />;
};

const ListCity = props => {
    let city=props?.city.toLowerCase()
//   console.log(props?.data?.length,props?.city.charAt(0).toUpperCase()+city.slice(1));
  const filteredCity=props?.data.filter(val=>val===props?.city.charAt(0).toUpperCase()+city.slice(1))
  console.log(filteredCity)
  return (
    <FlatList
      data={filteredCity?.length ? filteredCity : props?.data }
      renderItem={({item}) => (
        <View style={styles.mainList}>
          <Text style={styles.textList}>{item}</Text>
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  mainList: {
    width: '100%',
    height: 60,
    borderRadius: 6,
    backgroundColor: 'red',
  },
  textList:{
    color:'blue'
  }
});
