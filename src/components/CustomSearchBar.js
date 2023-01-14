import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {size} from '../styles/size';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

const CustomSearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search medicine" style={{...fonts.h3, flex: 1}} />
      <View style={{width: 15}} />
      <Icon name={'search'} size={25} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: size.height / 15,
    // width: size.width,
    borderWidth: 1,
    borderColor: colors.darkgray,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default CustomSearchBar;
