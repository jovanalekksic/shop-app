import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import ProductDetailsStyles from '../styles/ProductDetailsStyles';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
      <View style={ProductDetailsStyles.container}>
        <Image source={{ uri: product.image_link }} style={ProductDetailsStyles.image} />
        <View style={ProductDetailsStyles.details}>
          <Text style={ProductDetailsStyles.brand}>{product.brand}</Text>
          <Text style={ProductDetailsStyles.name}>{product.name}</Text>
          <Text style={ProductDetailsStyles.price}>${product.price}</Text>
        </View>
        
      </View>
   
  );
};

export default ProductDetailScreen;
