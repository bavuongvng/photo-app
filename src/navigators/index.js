import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavigatorMaps from './NavigatorMaps';
import { Camera, Welcome, Upload } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigatorMaps.Welcome} component={Welcome} />
      <Stack.Screen name={NavigatorMaps.Camera} component={Camera} />
      <Stack.Screen name={NavigatorMaps.Upload} component={Upload} />
    </Stack.Navigator>
  );
};

export { NavigatorMaps };

export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
