import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  const {user: info} = useSelector(({user}) => user);

  return (
    <Stack.Navigator initialRouteName="Login">
      {info ? (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      )}

      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
