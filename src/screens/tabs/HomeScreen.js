import {View, Text} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import CustomHeader from '../../components/CustomHeader';
import CustomSearchBar from '../../components/CustomSearchBar';

const HomeScreen = () => {
  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader cart={true} tag={true} title={'Home'} />
      <CustomSearchBar />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
