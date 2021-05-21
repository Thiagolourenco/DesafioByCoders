import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import UserInfo from './UserInfo';

const Bottom = createBottomTabNavigator();

export default function RoutesBottom() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={Home} />
      <Bottom.Screen name="UserInfo" component={UserInfo} />
    </Bottom.Navigator>
  );
}
