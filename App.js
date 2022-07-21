import {View, Text} from 'react-native';
import React from 'react';
import Routes from './src/navigation/Routes';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
