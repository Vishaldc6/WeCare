import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import GlobalStyles from '../../styles/GlobalStyles';

const ProfileScreen = () => {
  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader cart={true} title={'Profile'} />

      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
