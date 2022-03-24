import { NAVIGATION } from '@/constants';
import { navigationRef } from '@/navigation/NavigationRef';
import { CharacterDetails, Characters, Favorites, Search } from '@/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const RootStack = createStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{ header: false }}
        initialRouteName={NAVIGATION.characters}>
        <RootStack.Screen
          options={{ headerShown: false }}
          name={NAVIGATION.characters}
          component={Characters}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name={NAVIGATION.favorites}
          component={Favorites}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name={NAVIGATION.search}
          component={Search}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name={NAVIGATION.characterDetails}
          component={CharacterDetails}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
