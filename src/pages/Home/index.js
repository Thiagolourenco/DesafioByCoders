import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import styles from './styles';

export default function Home() {
  const [region, setRegion] = useState({
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: 0,
    longitude: 0,
  });
  const [watchIdValue, setWatchIdValue] = useState(0);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {
          coords: {latitude, longitude},
        } = position;

        setRegion({
          ...region,
          latitude,
          longitude,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 1000,
      },
    );

    mudaLocation();
  }, []);

  function mudaLocation() {
    const watchId = Geolocation.watchPosition(position => {
      const {
        coords: {latitude, longitude},
      } = position;

      setRegion({
        ...region,
        latitude,
        longitude,
      });
    });

    setWatchIdValue(watchId);
  }

  console.log('REGION', region);

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
