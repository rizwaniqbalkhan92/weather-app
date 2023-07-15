import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../Loader/Loader';
import {fetchAllData} from '../Actions/weatherActions';

const CitiesList = ({navigation}) => {
  const disptach = useDispatch();
  const [city, setCity] = useState('');
  const cities = useSelector(state => state?.weather?.cities);
  return (
    //   <Search city={city} setCity={setCity} />
    <>
      <ListCity
        navigation={navigation}
        disptach={disptach}
        data={cities}
        city={city}
      />
    </>
  );
};

export default CitiesList;

const Search = ({city, setCity}) => {
  return (
    <TextInput placeholder="Search City...." onChangeText={e => setCity(e)} />
  );
};

const ListCity = props => {
  let city = props?.city.toLowerCase();
  //   console.log(props?.data?.length,props?.city.charAt(0).toUpperCase()+city.slice(1));
  const filteredCity = props?.data.filter(
    val => val === props?.city.charAt(0).toUpperCase() + city.slice(1),
  );
  console.log(filteredCity);
  return (
    <FlatList
      data={filteredCity?.length ? filteredCity : props?.data}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.mainList}
          onPress={() => {
            props?.disptach(fetchAllData(item));
            props.navigation.navigate('detail', {name: item});
          }}>
          <Text style={styles.textList}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  mainList: {
    width: '90%',
    alignSelf: 'center',
    height: 60,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textList: {
    color: 'blue',
  },
});
