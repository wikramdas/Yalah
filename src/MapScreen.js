import React, {Fragment, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {getCurrentLocation} from './helper';
export default MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 30.5421145,
    longitude: 80.2764436,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  });

  useEffect(() => {
    (async () => {
      const position = await getCurrentLocation();
      if (position) {
        setRegion({
          ...region,
          latitude: position?.latitude,
          longitude: position?.longitude,
        });
      }
    })();
  }, []);

  return (
    <Fragment>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChange={region => setRegion(region)}>
        <Marker coordinate={region} />
      </MapView>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerContainer: {
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    width: 68,
    height: 68,
  },
  markerIcon: {
    width: 16,
    height: 16,
  },
  markerText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
