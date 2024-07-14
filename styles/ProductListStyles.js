import { StyleSheet } from 'react-native';
const ProductListStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: '#fff',
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 7,
      shadowRadius: 6,
      elevation: 3,
      marginHorizontal: 3,
    },
    image: {
      width: '36%',
      height: 120,
      borderRadius: 5,
      marginRight: 10,
    },
    textContainer: {
      flex: 1,

    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
      fontFamily: 'Montserrat_400Regular',
    },
    brand: {
      fontSize: 14,
      color: '#888',
      fontFamily: 'Montserrat_400Regular',
    },
    price: {
      fontSize: 14,
      color: '#888',
      position: 'absolute',
      bottom: 0,
      right: 10,
      fontFamily: 'Montserrat_400Regular',
    },
  });

  export default ProductListStyles;