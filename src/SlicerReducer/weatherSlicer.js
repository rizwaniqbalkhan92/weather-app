import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  theme: false,
  cities: [
    'Karachi',
    'Lahore',
    'Faisalabad',
    'Rawalpindi',
    'Gujranwala',
    'Peshawar',
    'Multan',
    'Hyderabad',
    'Islamabad',
    'Quetta',
    'Bahawalpur',
    'Sargodha',
    'Sialkot',
    'Sukkur',
    'Larkana',
    'Sheikhupura',
    'Rahim Yar Khan',
    'Jhang',
    'Gujrat',
    'Mardan',
    'Kasur',
    'Rahimyar Khan',
    'Sahiwal',
    'Okara',
    'Wah Cantonment',
    'Dera Ghazi Khan',
    'Mingora',
    'Mirpur Khas',
    'Chiniot',
    'Kamoke',
    'Mandi Bahauddin',
    'Jhelum',
    'Sadiqabad',
    'Khanewal',
    'Hafizabad',
    'Kohat',
    'Jacobabad',
    'Shikarpur',
    'Muzaffargarh',
    'Khanpur',
    'Gojra',
    'Bahawalnagar',
    'Abbottabad',
    'Muridke',
    'Pakpattan',
    'Khuzdar',
    'Jaranwala',
    'Chishtian',
    'Daska',
    'Mandi Bahauddin',
    'Ahmadpur East',
    'Kamalia',
    'Tando Adam',
    'Khairpur',
    'Dera Ismail Khan',
    'Vehari',
    'Nowshera',
    'Dadu',
    'Wazirabad',
    'Khushab',
    'Charsadda',
    'Swabi',
    'Chakwal',
    'Mianwali',
    'Tando Allahyar',
    'Kot Adu',
    'Turbat',
    'Mansa',
    'Layyah',
    'Kohat',
    'Murree',
    'Muzaffarabad',
    'Mandi Bahauddin',
    'Mansehra',
    'Toba Tek Singh',
    'Charsadda',
    'Bhakkar',
    'Jamshoro',
    'Mian Channu',
    'Nowshera',
    'Tando Muhammad Khan',
    'Rajanpur',
    'Kamalia',
    'Kamra',
    'Shahdadkot',
    'Pattoki',
    'Hujra Shah Muqim',
    'Kabirwala',
    'Shahdadpur',
    'Burewala',
    'Dipalpur',
    'Badin',
    'Pano Aqil',
    'Kotri',
    'Tando Jam',
    'Harunabad',
    'Liaquat Pur',
    'Shabqadar',
    'Ghotki',
    'Khipro',
    'Kunjah',
    'Umarkot',
    'Jauharabad',
    'Hujra',
    'Kalat',
    'Pindi Gheb',
    'Thatta',
    'Dina',
    'Pishin',
    'Tank',
    'Hangu',
    'Risalpur',
    'Karak',
    'Loralai',
    'Dullewala',
    'Pasrur',
    'Gandava',
    'Mehrabpur',
    'Kot Malik',
    'Shahpur',
    'Mianke Mor',
    'Jiwani',
    'Darya Khan',
    'Kulachi',
    'Mehar',
    'Sarai Alamgir',
    'Uthal',
    'Surab',
    'Gharo',
    'Kot Addu',
    'Kahror Pakka',
    'Musa Khel Bazar',
    'Rohtak',
    'Muridke',
    'Sodhra',
    'Kanga',
    'Chawinda',
    'Zahir Pir',
    'Lakki Marwat',
    'Kabirwala',
    'Kot Ghulam Muhammad',
    'Kotli',
    'Charsadda',
    'Khairpur Nathan Shah',
    'Kahna Nau',
    'Naushahro Feroze',
    'Kot Radha Kishan',
    'Ladhewala Waraich',
    'Qadirpur Ran',
    'Qadirpur Rawan',
    'Kamir',
    'Dijkot',
    'Chuhar Kana',
    'Phalia',
    'Sarai Naurang',
    'Kulachi',
    'Nankana Sahib',
    'Hasilpur',
    'Ubauro',
    'Sadiqabad',
    'Mailsi',
    'Haveli',
    'Chop',
    'Moro',
    'Mitha Tiwana',
    'Bhawana',
    'Khanqah Sharif',
    'Chiniot',
    'Kalabagh',
    'Rajanpur',
    'Qila Sheikhupura',
    'Jampur',
    'Narowal',
    'Chiniot',
    'Tando Allahyar',
    'Chak Jhumra',
    'Gojra',
    'Fazalpur',
    'Chak Azam Saffo',
    'Jatoi Shimali',
    'Gujar Khan',
    'Jaranwala',
    'Ladhewala Waraich',
    'Jhawarian',
    'Ubauro',
    'Zafarwal',
    'Kot Samaba',
    'Ladhewala Waraich',
    'Kot Sultan',
    'Shujaabad',
    'Samundri',
    'Kaleke Mandi',
    'Dina',
    'Darya Khan Marri',
    'Wazirabad',
    'Sanghar',
    'Kunjah',
    'Shorkot',
    'Bela',
    'Arifwala',
    'Bhiria City',
    'Sodhra',
    'Khadro',
    'Sita Road',
    'Dadhar',
    'Ahmadpur Sial',
    'Darya Khan',
    'Alipur',
    'Liaquat Pur',
    'Sakrand',
    'Kahror Pakka',
    'Mirpur Mathelo',
    'Mithi',
    'Lalian',
    'Sadiqabad',
    'Dhaunkal',
    'Ratodero',
    'Shorkot',
    'Sanghar',
    'Haripur',
    'Shikarpur',
    'Kunjah',
    'Matiari',
    'Talamba',
    'Kamalia',
    'Sukheke Mandi',
    'Mitha Tiwana',
    'Liliani',
    'Tandlianwala',
    'Daud Khel',
    'Piplan',
    'Mehar',
    'Thul',
    'Qadirpur Bagh',
    'Umarkot',
    'Khadro',
    'Mamukanjan',
    'Setharja Old',
    'Bhiria City',
    'Rojhan',
    'Nawabshah',
    'Pad Idan',
    'Basirpur',
    'Khadro',
    'Kot Sultan',
    'Pabbi',
    'Alipur Chatta',
    'Tando Allahyar',
    'Zafarwal',
    'Daur',
    'Pishin',
    'Sangla Hill',
    'Rojhan',
    'Kandhkot',
    'Jand',
    'Garhi Yasin',
    'Tando Jam',
    'Jhang Sadr',
    'Daud Khel',
    'Kunri',
    'Khadro',
    'Kamar Mushani',
    'Surkhpur',
    'Ubauro',
    'Sarai Sidhu',
    'Tando Ghulam Ali',
    'Chichawatni',
    'Khadro',
    'Nankana Sahib',
    'Thul',
    'Khadro',
    'Dadhar',
    'Dhoro Naro',
    'Burewala',
    'Tandlianwala',
    'Kunri',
    'Garh Maharaja',
    'Kamar Mushani',
    'Mamukanjan',
    'Khadro',
    'Jalalpur Jattan',
    'Pir Mahal',
    'Pir Jo Goth',
    'Talamba',
    'Zahir Pir',
    'Sillanwali',
    'Kunjah',
    'Khadro',
    'Ratodero',
    'Khairpur Nathan Shah',
    'Surkhpur',
    'Dadu',
    'Mubarikpur',
    'Kot Ghulam Muhammad',
    'Musa Khel Bazar',
    'Liliani',
    'Zafarwal',
    'Khadro',
    'Dhanot',
    'Hujra Shah Muqim',
  ],
  weather:{}
};

export const weatherSlicer = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    cityWeather(state,action){
      // console.log('weather-----------------',action.payload,state.weather)
        state.weather=action.payload
    }
  },

});

// Action creators are generated for each case reducer function
export const {cityWeather} = weatherSlicer.actions;

export default weatherSlicer.reducer;
