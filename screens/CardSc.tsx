import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {RSProps} from '..';
import {AtmCard, Container, Section} from '../components';
import {
  blackTextColor,
  CARD_PIN,
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
  function ShowPinProps(): JSX.Element {
    return (
      <View>
        <Container style={{padding: 15, width: width*0.9}}>
          <Text
            style={{
              fontSize: width * 0.08,
              paddingHorizontal: 5,
              color: blackTextColor,
              fontWeight: 'bold',
            }}>
            {CARD_PIN}
          </Text>
          <Pressable
            onPress={null}
            android_ripple={{
              radius: 40,
              borderless: true,
              color: 'gray',
            }}>
            <FEIcons name="copy" size={40} color="black" />
          </Pressable>
        </Container>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AlertSc', {children: <ShowPinProps />})
            }>
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
          </TouchableOpacity>
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
    </View>
  );
}
