import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import GlobalStyles from '../../styles/GlobalStyles';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import CustomHeading from '../../components/CustomHeading';
import {size} from '../../styles/size';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListTile = ({icon, title, onPress}) => (
  <View
    style={{
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    }}>
    <View style={{flexDirection: 'row'}}>
      <Icon name={icon} size={size.height / 35} color={colors.primary_color} />
      <View style={{width: 20}} />
      <Text style={fonts.h4}>{title}</Text>
    </View>
    <Icon
      name={'chevron-right'}
      size={size.height / 35}
      color={colors.primary_color}
    />
  </View>
);

const ProfileScreen = () => {
  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader cart={true} title={'Profile'} />
      {/* <Text style={fonts.h1}>Hii, xyz</Text>
      <Text style={{color: colors.primary_color}}>View Profile</Text> */}
      <CustomHeading header1={'Hii, xyz'} header2={'View Profile'} />

      <ScrollView>
        <ListTile icon={'shopping-cart'} title={'My Cart'} />
        <ListTile icon={'shopping-cart'} title={'My Doctors'} />
        <ListTile icon={'shopping-cart'} title={'My Lab Tests'} />
        <ListTile icon={'shopping-cart'} title={'My Orders'} />
      </ScrollView>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
