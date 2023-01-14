import {View, Text} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import CustomHeader from '../../components/CustomHeader';

const DoctorScreen = () => {
  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader search={true} title={'Docters'} />

      <Text>DoctorScreen</Text>
    </View>
  );
};

export default DoctorScreen;
