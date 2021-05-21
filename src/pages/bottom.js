import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from './Home';
import UserInfo from './UserInfo';

Icon.loadFont();

const Bottom = createBottomTabNavigator();

const icons = {
  Home: {
    lib: Icon,
    name: 'home',
  },
  UserInfo: {
    lib: Icon,
    name: 'user',
  },
};

export default function RoutesBottom() {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}>
      <Bottom.Screen name="Home" component={Home} />
      <Bottom.Screen name="UserInfo" component={UserInfo} />
    </Bottom.Navigator>
  );
}
