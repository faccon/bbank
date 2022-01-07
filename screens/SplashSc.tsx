import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {SSProps} from '..';
import {height, width} from '../constant';
import LottieView from 'lottie-react-native';

export function SplashSc({navigation}: SSProps) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LandingSc');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      <LottieView
        style={{width: width * 0.8, height: height * 0.35, marginVertical: 50}}
        source={require('../src/json/lf30_editor_sagfbhbu.json')}
        autoPlay
        loop={false}
      />
      <LottieView
        style={{width: width * 0.5}}
        source={require('../src/json/lf30_editor_fqayopjh.json')}
        autoPlay
        loop={false}
      />
    </View>
  );
}
