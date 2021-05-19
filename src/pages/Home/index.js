import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import styles from './styles';

export default function Home() {
  const region = {
    latitude: -3.900558,
    longitude: -38.408185,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        provider={PROVIDER_GOOGLE}
        region={region}
        initialRegion={region}>
        <Marker
          coordinate={{latitude: region.latitude, longitude: region.longitude}}
          // image={{uri: 'custom_pin'}}
        />
      </MapView>
    </View>
  );
}
