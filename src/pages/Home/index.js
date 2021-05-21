/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import analytics from '@react-native-firebase/analytics';
import {useDispatch, useSelector, useStore} from 'react-redux';

import styles from './styles';
import {Location} from '../../store/modules/user/actions';

export default function Home() {
  // const [region, setRegion] = useState({
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  //   latitude: 0,
  //   longitude: 0,
  // });
  const [, setWatchIdValue] = useState(0);

  const {region} = useSelector(({user}) => user);

  const dispatch = useDispatch();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {
          coords: {latitude, longitude},
        } = position;

        // setRegion({
        //   ...region,
        //   latitude,
        //   longitude,
        // });

        const data = {
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          latitude,
          longitude,
        };

        dispatch(Location(data));
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 1000,
      },
    );

    mudaLocation();
    analyticsLoad();
  }, [region]);

  async function analyticsLoad() {
    await analytics().logEvent('login', {
      region,
    });
  }

  function mudaLocation() {
    const watchId = Geolocation.watchPosition(position => {
      const {
        coords: {latitude, longitude},
      } = position;

      // setRegion({
      //   ...region,
      //   latitude,
      //   longitude,
      // });

      const data = {
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        latitude,
        longitude,
      };

      dispatch(Location(data));
    });

    setWatchIdValue(watchId);
  }

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
          coordinate={{
            latitude: region?.latitude,
            longitude: region?.longitude,
          }}
        />
      </MapView>
    </View>
  );
}
