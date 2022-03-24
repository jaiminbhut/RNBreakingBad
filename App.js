/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { LoadingView } from '@/components';
import { persistor, store } from '@/store';
import { theme } from '@/theme';
import React from 'react';
import { LogBox, StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootNavigator } from './src/navigation';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
/**
 * 
 * @returns
 *  import Icon from 'react-native-vector-icons/Feather';

<Icon
  name="Home"
  size={size ? size : 12}
  color={focused ? color : "#222222"}
  focused={focused}
  color={color}
/>
 */

const App = () => {
  LogBox.ignoreAllLogs(true);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={style.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.black}
          />
          <RootNavigator />
          <LoadingView />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
