import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './components/Details';
import BrowsePage from './components/BrowsePage';
import Player from './components/Player';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#141414',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}>
          <Stack.Screen name=" " component={Home} />
          <Stack.Screen name='BrowsePage' component={BrowsePage}/>
          <Stack.Screen name="Details" component={Details}/>
          <Stack.Screen name='Player' component={Player}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

