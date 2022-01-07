import React, {useEffect, useState} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {LSProps} from '..';
import {
  blackTextColor,
  keyboardVerticalOffset,
  primColor,
  primColorFaint,
} from '../constant';
import MIcons from 'react-native-vector-icons/MaterialIcons';

export function TransferSc({navigation}: LSProps) {
  const [accountN, setaccountN] = useState<string | undefined>();
  const [beneficiary, setBeneficiary] = useState<string | undefined>();
  const [amount, setAmount] = useState<string | undefined>();
  const [reference, setReference] = useState<string | undefined>();
  const [acnIsFocused, setacnIsFocused] = useState<boolean>(false);
  const [recIsFocused, setrecIsFocused] = useState<boolean>(false);
  const [amIsFocused, setamIsFocused] = useState<boolean>(false);
  const [refIsFocused, setrefIsFocused] = useState<boolean>(false);
  const [transferButton, setTransferButton] = useState<boolean>(false);

  useEffect(() => {
    const c = checkInputs().some(confirmInputs);
    if (!c) {
      setTransferButton(true);
    } else {
      setTransferButton(false);
    }
  }, [acnIsFocused, recIsFocused, amIsFocused, refIsFocused]);

  function handleTransfer() {
    return null;
  }

  const confirmInputs = (element: boolean) => element == true;
  const anyIsUndefined = (element: string | undefined) => element == undefined;
  const anyIsEmpty = (element: string | undefined) => element?.length == 0;

  function checkInputs(): boolean[] {
    const rules = [accountN, beneficiary, amount];
    const stateU = rules.some(anyIsUndefined);
    const stateE = rules.some(anyIsEmpty);
    return [stateU, stateE];
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <ScrollView>
        <Text style={{fontSize: 20, color: 'black', marginTop: 50}}>
          Who do you want to transfer to?
        </Text>
        <View style={{marginVertical: 10}}>
          <Text
            style={{color: blackTextColor, fontSize: 18, marginVertical: 4}}>
            Account number:
          </Text>
          <TextInput
            style={{
              backgroundColor: acnIsFocused ? primColor : primColorFaint,
              color: !acnIsFocused ? primColor : 'white',
              fontSize: 20,
              paddingHorizontal: 20,
              fontWeight: 'bold',
            }}
            value={accountN}
            onChangeText={setaccountN}
            onFocus={() => setacnIsFocused(!acnIsFocused)}
            onBlur={() => setacnIsFocused(!acnIsFocused)}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text
            style={{color: blackTextColor, fontSize: 18, marginVertical: 4}}>
            Account name:
          </Text>
          <TextInput
            style={{
              backgroundColor: recIsFocused ? primColor : primColorFaint,
              color: !recIsFocused ? primColor : 'white',
              fontSize: 20,
              paddingHorizontal: 20,
              fontWeight: 'bold',
            }}
            value={beneficiary}
            onChangeText={setBeneficiary}
            onFocus={() => setrecIsFocused(!recIsFocused)}
            onBlur={() => setrecIsFocused(!recIsFocused)}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text
            style={{color: blackTextColor, fontSize: 18, marginVertical: 4}}>
            Amount:
          </Text>
          <TextInput
            style={{
              backgroundColor: amIsFocused ? primColor : primColorFaint,
              color: !amIsFocused ? primColor : 'white',
              fontSize: 20,
              paddingHorizontal: 20,
              fontWeight: 'bold',
            }}
            value={amount}
            onChangeText={setAmount}
            onFocus={() => setamIsFocused(!amIsFocused)}
            onBlur={() => setamIsFocused(!amIsFocused)}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text
            style={{color: blackTextColor, fontSize: 18, marginVertical: 4}}>
            Note / Reference:
          </Text>
          <TextInput
            style={{
              backgroundColor: refIsFocused ? primColor : primColorFaint,
              color: !refIsFocused ? primColor : 'white',
              fontSize: 20,
              paddingHorizontal: 20,
              fontWeight: 'bold',
              height: 100,
              textAlignVertical: 'top',
            }}
            multiline
            value={reference}
            onChangeText={setReference}
            onFocus={() => setrefIsFocused(!refIsFocused)}
            onBlur={() => setrefIsFocused(!refIsFocused)}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: transferButton ? primColor : primColorFaint,
            paddingHorizontal: 40,
            paddingVertical: 8,
            borderRadius: 5,
          }}
          onPress={handleTransfer}
          disabled={transferButton}>
          <MIcons name="send" size={30} color="white" />
          <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 10}}>
            {' '}
            SEND{' '}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
