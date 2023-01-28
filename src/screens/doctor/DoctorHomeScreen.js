import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import GlobalStyles from '../../styles/GlobalStyles';

const DoctorHomeScreen = () => {
  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader title={'Hello Doctor !'} />
      <Text>DoctorHomeScreen</Text>
    </View>
  );
};

export default DoctorHomeScreen;
