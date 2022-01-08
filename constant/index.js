import {Dimensions} from 'react-native';

export const SPSC = 'SplashSc';
export const LGSC = 'LoginSc';
export const RGSC = 'RegSc';
export const LNSC = 'LandingSc';
export const TSC = 'TransferSc';
export const HMSC = 'HomeSc';
export const CARDSC = 'CardSc';
export const ALERTSC = 'AlertSc';

export const DEBIT = '- ';
export const CREDIT = ' + ';
export const CURRENCY = '€ ';

export const HIDDEN_CARD_NO = ' **** **** **** 8421 ';
export const HIDDEN_CARD_EXP = ' **/** ';
export const HIDDEN_CARD_CVC = ' *** ';
export const CARD_PIN = ' 1234 ';

export const width = Dimensions.get('screen').width;
export const height = Dimensions.get('screen').height;

export const primColor = '#008000';
export const primColorFaint = 'rgba(0,128,0,0.2)';
export const blackTextColor = 'black';
export const containerBgColor = '#F7F6F5';
export const cardLast4 = '*1612';
export const MainCardLast4 = '*8421';
export const cardLastBalance = '€ 5,312.05';
export const BALANCE = '€ 13 528,31';
export const welcome = `Welcome back,
Jay!`;

export const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;
