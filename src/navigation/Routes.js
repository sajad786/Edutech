import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import auth from '@react-native-firebase/auth';
import types from '../redux/types';

const Stack = createNativeStackNavigator();

const Routes = () => {
  // const [initializing, setIntializing] = useState(true);
  // const [user, setUser] = useState(false);

  // const dispatchUserState = user => {
  //   console.log(user, 'user');
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(dispatchUserState);
  //   return subscriber;
  // }, []);

  return (
    <NavigationContainer>
      {false ? MainStack(Stack) : AuthStack(Stack)}
    </NavigationContainer>
  );
};

export default Routes;
