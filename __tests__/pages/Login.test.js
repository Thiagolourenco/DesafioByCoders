import React from 'react';
import renderer from 'react-test-renderer';
// import {Provider} from 'react-redux';
// import configureStore from 'redux-mock-store';
import {useNavigation} from '@react-navigation/native';

import Login from '../../src/pages/Login';

const state = {
  loading: false,
  user: {},
};

describe('testing screen login', () => {
  const navigate = jest.fn();

  it('Login', () => {
    useNavigation.mockReturnValue({navigate});

    const tree = renderer.create(<Login />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
