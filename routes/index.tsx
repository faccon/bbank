import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {rootStackParams} from '..';
import {SPSC} from '../constant';
import {SplashSc} from '../screens/SplashSc';

const RootStack = createNativeStackNavigator<rootStackParams>();

export function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={SPSC} component={SplashSc} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
