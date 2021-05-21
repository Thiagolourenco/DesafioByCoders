import React from 'react';
import renderer from 'react-test-renderer';

import {useNavigation} from '@react-navigation/native';

import Register from '../../src/pages/Register';

describe('testing screen register', () => {
  const navigate = jest.fn();

  it('register', () => {
    useNavigation.mockReturnValue({navigate});

    const tree = renderer.create(<Register />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
