import 'react-native';
import React from 'react';
import StartScreen from "../app/screens/StartScreen";

import renderer from 'react-test-renderer';

  it('StartScreen renders correctly', () => {
    const tree0 = renderer.create(
      <StartScreen />
      ).toJSON();
    expect(tree0).toMatchSnapshot();
  });

 