import {View, Text} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import CustomHeader from '../../components/CustomHeader';

const HomeScreen = () => {
  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
