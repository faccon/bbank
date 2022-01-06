import React from 'react';
import {Text, View} from 'react-native';
import {SSProps} from '..';

export function SplashSc({navigation}: SSProps) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={{fontSize: 20, color: 'black'}}>SPLASH</Text>
    </View>
  );
}
