import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import CustomHeader from '../components/CustomHeader';
import CustomSearchBar from '../components/CustomSearchBar';
import ScreenNames from '../navigation/screenNames/ScreenNames';
import {products} from '../assets/data/products';
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import {size} from '../styles/size';

const ProductCard = ({item}) => {
  return (
    <View style={styles.categoryCard}>
      <Image source={item.image} style={{height: 120, width: 120}} />
      <View>
        <Text style={fonts.h4}>{item.name}</Text>
        <Text style={{...fonts.h3, color: colors.darkgray}}>
          {item.quantity} items
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{...fonts.h3, color: colors.darkgray}}>
            {item.rate}{' '}
          </Text>
          <Text style={{...fonts.h3, color: colors.darkgray}}>
            ({item.rating} ratings)
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Text style={fonts.h6}>Rs.{item.price}</Text>
          <Text style={fonts.h3}> {item.discount} % off</Text>
        </View>
        {/* <CustomButton title={'Add to Cart'} /> */}
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: colors.primary_color,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{...fonts.h6, margin: 10, color: colors.primary_color}}>
            Add to Cart
          </Text>
        </View>
      </View>
    </View>
  );
};

const ProductScreen = props => {
  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader title={'Products'} />
      <CustomSearchBar
        onPress={() => {
          //   props.navigation.navigate(ScreenNames.SearchScreen);
        }}
        placeholder="Search Product.."
      />
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCard item={item} />}
      />

      <Text>ProductScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    flex: 1,
    width: size.width,
    // backgroundColor: 'blue',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export default ProductScreen;
