import React from 'react';
import {Home, Login, Profile, Signup} from '../Screens';
import navigationStrings from './navigationStrings';
import TabStack from './TabStack';

const MainStack = Stack => {
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.TAB_STACK}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={navigationStrings.TAB_STACK} component={TabStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
