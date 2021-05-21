import React from 'react';
import renderer from 'react-test-renderer';

import {useNavigation} from '@react-navigation/native';

import UserInfo from '../../src/pages/UserInfo';

describe('testing screen user info', () => {
  const navigate = jest.fn();

  it('user info', () => {
    useNavigation.mockReturnValue({navigate});

    const tree = renderer.create(<UserInfo />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
