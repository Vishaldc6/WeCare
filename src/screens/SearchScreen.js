import {View, Text} from 'react-native';
import React from 'react';
import CustomSearchBar from '../components/CustomSearchBar';
import GlobalStyles from '../styles/GlobalStyles';

const SearchScreen = () => {
  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomSearchBar />
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
