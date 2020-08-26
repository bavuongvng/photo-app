import {
  checkMultiple,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

export const requestPermission = () => {
  requestMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ])
    .then((resRequest) => {
      console.log({ resRequest });
    })
    .catch((errorRequest) => {
      console.log({ errorRequest });
    });
};

export const checkPermission = () => {
  checkMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ])
    .then((res) => {
      const values = Object.values(res);
      const isNot = values.some((val) => val !== RESULTS.GRANTED);
      if (isNot) requestPermission();
    })
    .catch((error) => {
      console.log({ error });
    });
};
