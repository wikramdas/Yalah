import {Platform} from 'react-native';
import {
  check,
  PERMISSIONS,
  RESULTS,
  openSettings,
  request,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export const openLocationSettings = () => {
  openSettings();
};
export const checkForLocationPermission = onPermissionResult => {
  const permission =
    Platform.OS == 'android'
      ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      : parseInt(Platform.Version, 10) < 13
      ? PERMISSIONS.IOS.LOCATION_ALWAYS
      : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

  check(permission)
    .then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      if (response === RESULTS.GRANTED) {
        onPermissionResult(true);
      } else {
        request(permission).then(response => {
          if (response === RESULTS.GRANTED) {
            onPermissionResult(true);
          } else if (response === RESULTS.BLOCKED) {
            // openSettings();
            onPermissionResult('blocked');
          } else if (response === 'unavailable') {
            onPermissionResult('unavailable');
          } else {
            onPermissionResult(false);
          }
        });
      }
    })
    .catch(error => {
      onPermissionResult(false);
    });
};

export const getCurrentLocation = () =>
  new Promise(async (resolve, reject) => {
    try {
      checkForLocationPermission(isAllowed => {
        if (isAllowed) {
          Geolocation.getCurrentPosition(
            position => {
              resolve(position.coords);
            },
            error => {
              resolve(null);
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          resolve(null);
          alert('Please check for permission settings');
        }
      });
    } catch (e) {
      console.log('error in getCurrentLocation catch', e);
      reject(e);
    }
  });
