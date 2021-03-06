import {NativeStackScreenProps} from '@react-navigation/native-stack';

type rootStackParams = {
  SplashSc: undefined;
  LoginSc: undefined;
  RegSc: undefined;
  LandingSc: undefined;
  HomeSc: undefined;
  TransferSc: undefined;
  CardSc: undefined;
  AlertSc: AlertScProps;
};

interface AlertScProps {
  children: Element[] | Element;
}

type SSProps = NativeStackScreenProps<rootStackParams, 'SplashSc'>;
type LSProps = NativeStackScreenProps<rootStackParams, 'LoginSc'>;
type RSProps = NativeStackScreenProps<rootStackParams, 'RegSc'>;
type LNSProps = NativeStackScreenProps<rootStackParams, 'LandingSc'>;
type HMSProps = NativeStackScreenProps<rootStackParams, 'HomeSc'>;
type TSProps = NativeStackScreenProps<rootStackParams, 'TransferSc'>;
type CSProps = NativeStackScreenProps<rootStackParams, 'CardSc'>;
type ALSProps = NativeStackScreenProps<rootStackParams, 'AlertSc'>;
