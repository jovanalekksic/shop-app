import { StyleSheet } from 'react-native';

const ProductDetailsStyles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20, 
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 5,
    },
    brand: {
      fontSize: 15,
      marginTop: 20,
      fontFamily: 'Montserrat_400Regular',
      color: '#fff',
      alignSelf: 'center', 
    },
    name: {
      marginTop:25,
      fontWeight: 'condensed',
      fontSize: 20,
      color: '#fff',
      fontFamily: 'Montserrat_400Regular',
      alignSelf: 'center', 
    },
    price: {
      fontSize: 25,
      color: '#fff',
      marginTop: 50,
      fontFamily: 'Montserrat_400Regular',
      alignSelf: 'flex-end', 
      fontWeight:'bold'
    },
    
    details: {
      backgroundColor: '#336FB3',
      borderRadius: 40,
      width: '100%',
      padding: 15,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top:250,
    },
  });
  export default ProductDetailsStyles;