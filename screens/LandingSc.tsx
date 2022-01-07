import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {LSProps} from '..';
import {CardImage} from '../components';
import {height, primColor, width} from '../constant';

export function LandingSc({navigation}: LSProps) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: primColor,
        alignContent: 'center',
        justifyContent: 'space-around',
        paddingVertical: 80,
      }}>
      {/* Logo View */}

      <View
        style={{
          marginHorizontal: 30,
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: width * 0.15, color: 'black', fontWeight: 'bold'}}>
          BANK<Text style={{fontSize: width * 0.2, color: 'white'}}>9JA</Text>
        </Text>
      </View>

      <View style={{position: 'absolute', left: 50, top: 100}}>
        <CardImage size={width * 0.3} />
      </View>

      {/* Description View */}
      <View
        style={{
          alignItems: 'center',
          marginVertical: 40,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: width * 0.12,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: 1,
          }}>
          A bank that priotitize your comfort.
        </Text>
      </View>

      {/* Button View */}
      <Pressable
        style={{
          alignSelf: 'center',
          width: width * 0.25,
          height: width * 0.25,
          borderRadius: (width * 0.25) / 2,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          shadowRadius: width * 0.28,
          shadowOpacity: 0.8,
          shadowColor: 'white',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          elevation: 5,
        }}
        android_ripple={{radius: width * 0.15, borderless: true}}
        onPress={() => navigation.navigate('HomeSc')}>
        <Text style={{color: 'green', fontSize: 30, fontWeight: 'bold'}}>
          Go
        </Text>
      </Pressable>
    </View>
  );
}
