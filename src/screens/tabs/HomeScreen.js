import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import CustomHeader from '../../components/CustomHeader';
import CustomSearchBar from '../../components/CustomSearchBar';
import {size} from '../../styles/size';
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import CustomButton from '../../components/CustomButton';
import ScreenNames from '../../navigation/screenNames/ScreenNames';

const Card = ({title, icon, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Fontisto
        name={icon}
        size={size.height / 25}
        color={colors.black}
        style={{marginVertical: 10}}
      />
      <Text style={{...fonts.h3, textAlign: 'center'}}>{title}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const HomeScreen = props => {
  return (
    <View style={GlobalStyles.mainContainer}>
      {/* Header */}
      <CustomHeader cart={true} tag={true} title={'Home'} />

      {/* SearchBar */}
      <CustomSearchBar
        onPress={() => {
          props.navigation.push(ScreenNames.SearchScreen);
        }}
      />

      {/* Card View Container */}
      <View style={styles.cardContainer}>
        <Card
          title={'Lab Test'}
          icon={'laboratory'}
          onPress={() => {
            console.log('Lab Test Page');
          }}
        />
        <Card
          title={'Medicines'}
          icon={'pills'}
          onPress={() => {
            console.log('Medicine Page');
          }}
        />
        <Card
          title={'Health Product'}
          icon={'shopping-store'}
          onPress={() => {
            console.log('Health Product Page');
          }}
        />
        <Card
          title={'Consult Doctor'}
          icon={'doctor'}
          onPress={() => {
            console.log('Consult Doctor Page');
          }}
        />
      </View>

      {/* Prescription Upload */}
      <View style={styles.prescriptionContainer}>
        <View style={{flex: 1}}>
          <Text style={fonts.h6}>Order quickly with a prescription</Text>
          <Text style={fonts.h3}>
            Just upload the prescription and tell us what you need. We do the
            rest !
          </Text>
        </View>
        <View style={styles.btn}>
          <Text
            style={{
              ...fonts.h5,
              color: colors.white,
            }}>
            Upload
          </Text>
        </View>
        {/* <CustomButton title={'Upload'} /> */}
      </View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    // width: size.width,
    // height: size.height / 7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  prescriptionContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 5,
    borderRadius: 10,
    padding: 6,
    marginVertical: 5,
  },
  btn: {
    backgroundColor: colors.primary_color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default HomeScreen;
