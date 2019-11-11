import React from 'react';
import {StatusBar} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppNavigator from './AppNavigator';
import AuthLoading from './screens/AuthLoading';
import AuthMain from './screens/AuthMain';
import {StoreProvider} from './Store';
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      AppNavigator,
      AuthMain,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
export default () => {
  return (
    <StoreProvider>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </StoreProvider>
  );
};
