// screens/ProductListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ProductListStylesheet, Pressable } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ProductListStyles from '../styles/ProductListStyles';

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      style={ProductListStyles.itemContainer}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
        <Image source={{ uri: item.image_link }} style={ProductListStyles.image} />
        <View style={ProductListStyles.textContainer}>
            <Text style={ProductListStyles.name}>{item.name}</Text>
            <Text style={ProductListStyles.brand}>{item.brand}</Text>
            <Text style={ProductListStyles.price}>${item.price}</Text>
        </View>
       
    </Pressable>
  );

  return (
    <View style={ProductListStyles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};



export default ProductListScreen;
