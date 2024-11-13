import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddDrinkScreen from './src/screens/AddDrinkScreen';
import EditDrinkScreen from './src/screens/EditDrinkScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu Minuman' }} />
        <Stack.Screen name="AddDrink" component={AddDrinkScreen} options={{ title: 'Tambah Minuman' }} />
        <Stack.Screen name="EditDrink" component={EditDrinkScreen} options={{ title: 'Edit Minuman' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
