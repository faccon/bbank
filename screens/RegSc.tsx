import React from 'react';
import {Text, View} from 'react-native';
import {RSProps} from '..';

export function RegSc({navigation}: RSProps) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={{fontSize: 20, color: 'black'}}>REG SCREEN</Text>
    </View>
  );
}
