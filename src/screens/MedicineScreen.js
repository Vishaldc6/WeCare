import {View, Text} from 'react-native';
import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import CustomHeader from '../components/CustomHeader';
import CustomSearchBar from '../components/CustomSearchBar';
import ScreenNames from '../navigation/screenNames/ScreenNames';

const MedicineScreen = props => {
  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader title="Medicines" />
      <CustomSearchBar
        onPress={() => {
          //   props.navigation.push(ScreenNames.SearchScreen);
        }}
      />
      <Text>MedicineScreen</Text>
    </View>
  );
};

export default MedicineScreen;
