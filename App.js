import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/pages/Login';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
