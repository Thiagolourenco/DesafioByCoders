import React from 'react';
import renderer from 'react-test-renderer';
// import {Provider} from 'react-redux';
// import configureStore from 'redux-mock-store';
import {useNavigation} from '@react-navigation/native';

import ModalAlert from '../../src/components/ModalAlert';

describe('testing component modal Alert', () => {
  const navigate = jest.fn();

  it('modal alert', () => {
    useNavigation.mockReturnValue({navigate});

    const tree = renderer.create(<ModalAlert />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
