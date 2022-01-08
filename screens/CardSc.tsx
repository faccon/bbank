import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RSProps} from '..';
import {AtmCard, Container, Section} from '../components';
import {
  blackTextColor,
  containerBgColor,
  HIDDEN_CARD_CVC,
  HIDDEN_CARD_EXP,
  HIDDEN_CARD_NO,
  primColorFaint,
  width,
} from '../constant';
import EIcons from 'react-native-vector-icons/Entypo';
import FEIcons from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';

export function CardSc({navigation}: RSProps) {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <AtmCard />
      <Container style={{justifyContent: 'space-evenly'}}>
        <Container style={{paddingHorizontal: 10, paddingVertical: 15}}>
          <EIcons name="lock" size={20} color="black" />
          <Text
            style={{
              fontSize: width * 0.05,
              paddingHorizontal: 5,
              color: blackTextColor,
            }}>
            Lock
          </Text>
        </Container>
        <Text
          style={{
            fontSize: width * 0.05,
            paddingHorizontal: 5,
            color: primColorFaint,
          }}>
          |
        </Text>
        <Container style={{padding: 10}}>
          <EIcons name="dial-pad" size={20} color="black" />
          <Text
            style={{
              fontSize: width * 0.05,
              paddingHorizontal: 5,
              color: blackTextColor,
            }}>
            Show Pin
          </Text>
        </Container>
      </Container>
      <Section
        style={{marginVertical: 20}}
        leftText="Card Details"
        rightText="show"
      />

      {/* Card Details */}
      <Container style={{padding: 15}}>
        <Text
          style={{
            fontSize: width * 0.05,
            paddingHorizontal: 5,
            color: blackTextColor,
          }}>
          {HIDDEN_CARD_NO}
        </Text>
        <FEIcons name="copy" size={25} color="black" />
      </Container>

      <Container
        style={{
          backgroundColor: 'transparent',
          marginVertical: 10,
          justifyContent: 'space-evenly',
        }}>
        <Container style={{padding: 15, width: '48%'}}>
          <Text
            style={{
              fontSize: width * 0.05,
              paddingHorizontal: 5,
              color: blackTextColor,
            }}>
            {HIDDEN_CARD_EXP}
          </Text>
          <FEIcons name="copy" size={25} color="black" />
        </Container>
        <Container style={{padding: 15, width: '48%'}}>
          <Text
            style={{
              fontSize: width * 0.05,
              paddingHorizontal: 5,
              color: blackTextColor,
            }}>
            {HIDDEN_CARD_CVC}
          </Text>
          <FEIcons name="copy" size={25} color="black" />
        </Container>
      </Container>

      {/* End of card details */}

      <Section
        style={{marginVertical: 20}}
        leftText="Card settings"
        rightText=""
      />
      <View
        style={{
          padding: 10,
          backgroundColor: containerBgColor,
          marginHorizontal: 20,
          borderRadius: 5,
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: 'center',
            borderBottomWidth: 0.4,
            borderBottomColor: primColorFaint,
          }}
          onPress={() => {
            return null;
          }}>
          <Text
            style={{
              fontSize: width * 0.05,
              paddingHorizontal: 5,
              color: blackTextColor,
            }}>
            Change card limit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: 'center',
            borderBottomWidth: 0.4,
            borderBottomColor: primColorFaint,
          }}
          onPress={() => {
            return null;
          }}>
          <Text
            style={{
              fontSize: width * 0.05,
              paddingHorizontal: 5,
              color: blackTextColor,
            }}>
            Change Pin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: 'center',
          }}
          onPress={() => {
            return null;
          }}>
          <Text
            style={{
              fontSize: width * 0.05,
              paddingHorizontal: 5,
              color: blackTextColor,
              textAlignVertical: 'bottom',
            }}>
            Replace card
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
