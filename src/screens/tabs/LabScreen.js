import {View, Text} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import CustomHeader from '../../components/CustomHeader';

const LabScreen = () => {
  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader search={true} title={'Laboratory'} />

      <Text>LabScreen</Text>
    </View>
  );
};

export default LabScreen;
