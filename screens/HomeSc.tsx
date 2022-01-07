import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  blackTextColor,
  cardLast4,
  cardLastBalance,
  primColor,
  welcome,
  width,
} from '../constant';
import LottieView from 'lottie-react-native';
import {AtmCard, Container, Footer, Section, Transactions} from '../components';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import { HMSProps } from '..';

export function HomeSc({navigation}: HMSProps) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header*/}
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: primColor,
          margin: 10,
          borderRadius: 10
        }}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            textAlign: 'left',
            fontWeight: 'bold',
          }}>
          {welcome}
        </Text>
        <LottieView
          style={{width: width * 0.15}}
          source={require('../src/json/27011-sungrass-emoji.json')}
          autoPlay
          loop
        />
      </View>
      {/* Header End*/}

      {/* <Container>
        <Container>
          <Image
            source={require('../src/images/visa.png')}
            style={{height: 50, width: 50}}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 25,
              color: blackTextColor,
              textAlign: 'left',
              paddingHorizontal: 10,
            }}>
            {cardLast4}
          </Text>
        </Container>
        <Text
          style={{
            fontSize: 25,
            color: blackTextColor,
            textAlign: 'left',
            fontWeight: 'bold',
            paddingHorizontal: 10,
          }}>
          {cardLastBalance}
        </Text>
      </Container>
  */}

      <Section leftText="Balance" rightText="" />
      <Text
        style={{
          fontSize: 50,
          color: blackTextColor,
          textAlign: 'left',
          fontWeight: 'bold',
          paddingHorizontal: 20,
          letterSpacing: -2
        }}>
        {cardLastBalance}
      </Text>

      <Container style={{marginVertical: 25, padding: 10}}>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() => navigation.navigate('TransferSc')}
        >
          <MIcons name="send" size={30} color="black" />
          <Text
            style={{
              fontSize: 18,
              color: blackTextColor,
              textAlign: 'center',
              paddingVertical: 5,
            }}>
            Transfer
          </Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <MCIcons name="reload" size={30} color="black" />
          <Text
            style={{
              fontSize: 18,
              color: blackTextColor,
              textAlign: 'center',
              paddingVertical: 5,
            }}>
            Standing order
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <MCIcons name="file-multiple" size={30} color="black" />
          <Text
            style={{
              fontSize: 18,
              color: blackTextColor,
              textAlign: 'center',
              paddingVertical: 5,
            }}>
            Statement
          </Text>
        </View>
      </Container>

      <Section style={{marginBottom:5}} leftText="Last transactions" rightText="Manage" />
      <Transactions />

      <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%'}}>
        <Footer />
      </View>
    </View>
  );
}
