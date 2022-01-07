import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStackParams} from '..';
import {HMSC, LNSC, SPSC} from '../constant';
import {SplashSc} from '../screens/SplashSc';
import {LandingSc} from '../screens/LandingSc';
import { HomeSc } from '../screens/HomeSc';

const RootStack = createNativeStackNavigator<rootStackParams>();

export function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={SPSC}
          component={SplashSc}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={LNSC}
          component={LandingSc}
          options={{
            headerShown: false,
            animation: 'slide_from_bottom'
          }}
        />
        <RootStack.Screen
          name={HMSC}
          component={HomeSc}
          options={{
            headerShown: false,
            animation: 'slide_from_right'
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
