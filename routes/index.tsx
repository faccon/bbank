import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStackParams} from '..';
import {CARDSC, HMSC, LNSC, SPSC, TSC} from '../constant';
import {SplashSc} from '../screens/SplashSc';
import {LandingSc} from '../screens/LandingSc';
import { HomeSc } from '../screens/HomeSc';
import { TransferSc } from '../screens/TransferSc';
import { CardSc } from '../screens/CardSc';

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
        <RootStack.Screen
          name={TSC}
          component={TransferSc}
          options={{
            headerShown: false,
            animation: 'slide_from_right'
          }}
        />
        <RootStack.Screen
          name={CARDSC}
          component={CardSc}
          options={{
            headerShown: false,
            animation: 'slide_from_bottom'
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
