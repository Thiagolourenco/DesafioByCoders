import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
