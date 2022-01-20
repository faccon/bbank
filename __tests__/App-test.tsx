/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {SplashSc} from '../screens/SplashSc';
import { HomeSc } from '../screens/HomeSc';
import { LandingSc } from '../screens/LandingSc';
import { LoginSc } from '../screens/LoginSc';
import { RegSc } from '../screens/RegSc';
import { CardSc } from '../screens/CardSc';

test('Splash Screen renders correctly', () => {
  const tree = renderer.create(<SplashSc />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Splash Screen renders correctly', () => {
  const tree = renderer.create(<HomeSc />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Splash Screen renders correctly', () => {
  const tree = renderer.create(<LandingSc />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Splash Screen renders correctly', () => {
  const tree = renderer.create(<LoginSc />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Splash Screen renders correctly', () => {
  const tree = renderer.create(<RegSc />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Splash Screen renders correctly', () => {
  const tree = renderer.create(<CardSc />).toJSON();
  expect(tree).toMatchSnapshot();
});

