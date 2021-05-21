import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
// import analytics from '@react'

import styles from './styles';
import {Colors} from '../../constants';
import {LoginSuccess} from '../../store/modules/user/actions';

import ModalAlert from '../../components/ModalAlert';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const {, error, visible} = useSelector(({user}) => user);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  async function handleSubmit() {
    // dispatch(LoginRequest(username, password));

    auth()
      .signInWithEmailAndPassword(username, password)
      .then(res => {
        dispatch(LoginSuccess(res.user));
        setLoading(false);
        navigate('Home');
      })
      .catch(error => {
        console.log('error', error);
      });

    // await analytics().logEvent('login', {
    //   data: {
    //     email: username,
    //     password: password,
    //   },
    // });

    // if (!loading) {
    //   navigate('Home');
    // }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.content}>
        <TextInput
          placeholder="email"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="*******"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Pressable style={styles.btn} onPress={handleSubmit}>
        {loading ? (
          <ActivityIndicator size="small" color={Colors.White} />
        ) : (
          <Text style={styles.btnText}>Logar</Text>
        )}
      </Pressable>

      <Pressable
        style={styles.btnRegister}
        onPress={() => navigate('Register')}>
        <Text style={styles.btnText}>Cadastrar</Text>
      </Pressable>

      <ModalAlert visible={visible} error={error} />
    </View>
  );
}
