import React from 'react';
import {Text, View} from 'react-native';
import {LSProps} from '..';

export function LoginSc({navigation}: LSProps) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={{fontSize: 20, color: 'black'}}>LOGIN SCREEN</Text>
    </View>
  );
}
