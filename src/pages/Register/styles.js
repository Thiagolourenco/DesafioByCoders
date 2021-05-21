import {StyleSheet} from 'react-native';

import {Colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: Colors.EerieBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.White,
    textAlign: 'center',
  },
  content: {
    marginTop: 20,
  },
  input: {
    height: 50,
    width: 345,
    fontSize: 16,
    color: Colors.EerieBlack,
    marginHorizontal: 32,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: Colors.White,
    marginTop: 8,
  },
  btn: {
    width: 325,
    height: 50,
    marginHorizontal: 32,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: Colors.BlueRYB,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    color: Colors.White,
    fontWeight: 'bold',
  },
  btnRegister: {
    marginTop: 20,
  },
});

export default styles;
