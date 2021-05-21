import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

// type ErrorHandler = (error: mixed, isFatal: boolean) => void;
// https://dwf.life/react-native-community/upgrade-support/issues/152

jest.useFakeTimers();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    __esModule: true,
    ...originalModule,
    useFocusEffect: jest.fn(),
    useNavigation: jest.fn(),
    useRoute: jest.fn(),
  };
});

jest.mock('react-redux');

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-community/geolocation', () => ({
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
}));
jest.mock('react-native-maps', () => {
  return class MockMapView extends React.Component {
    static Marker = props =>
      React.createElement('Marker', props, props.children);
    static propTypes = {children: React.PropTypes.any};

    render() {
      return React.createElement('MapView', this.props, this.props.children);
    }
  };
});

useSelector.mockImplementation(() => ({
  personalData: {
    name: '',
    email: '',
    cpf: '',
    phone: '',
  },
}));

const dispatch = jest.fn();

useDispatch.mockReturnValue(dispatch);
