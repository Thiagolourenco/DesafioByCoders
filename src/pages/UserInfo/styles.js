import {StyleSheet} from 'react-native';

import {Colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#212121',
    fontWeight: 'bold',
  },
  btnLogout: {
    backgroundColor: Colors.VioletColorWheel,
    width: 250,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 30,
  },
  btnLogoutText: {
    fontSize: 16,
    color: Colors.White,
    fontWeight: 'bold',
  },
});

export default styles;
