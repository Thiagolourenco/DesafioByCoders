import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import analytics from '@react-native-firebase/analytics';
import {Provider} from 'react-redux';

import Routes from './src/pages';

import {store} from './src/store';

export default function App() {
  const navigationRef = useRef(null);
  const routeNameRef = useRef(null);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current?.getCurrentRoute().name)
      }
      // onStateChange={async state => {
      //   const previousRouteName = routeNameRef.current;
      //   const currentRouteName = navigationRef.curren?.getCurrentRoute().name;

      //   if (previousRouteName !== currentRouteName) {
      //     await analytics().logScreenView({
      //       screen_name: currentRouteName,
      //       screen_class: currentRouteName,
      //     });
      //   }

      //   routeNameRef.current = currentRouteName;
      // }}
    >
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}
