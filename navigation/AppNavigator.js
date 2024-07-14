import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../screens/ProductList';
import ProductDetailScreen from '../screens/ProductDetails';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const Stack = createStackNavigator();

function AppNavigator() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      < Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#336FB3',
            elevation: 0, 
           
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat_700Bold', 
            fontSize: 24,
            color: '#fff', 
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{title:'Maybeline cosmetics'}} />
        
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{title:'Product details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
